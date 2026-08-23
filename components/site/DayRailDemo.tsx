'use client';

import { useEffect, useRef, useState } from 'react';

const WORK_START_MIN = 8 * 60;
const WORK_END_MIN = 16 * 60;
const LOOP_MS = 12000;

const TASKS = [
  { label: 'Client reply', time: '8:45', duration: '15m', atPercent: 11 },
  { label: 'Revise quote', time: '10:30', duration: '45m', atPercent: 34 },
  { label: 'Site visit', time: '1:00', duration: '1h', atPercent: 62 },
  { label: 'Proposal', time: '3:15', duration: '90m', atPercent: 90 },
] as const;

function formatTime(minutesOfDay: number): string {
  let hour = Math.floor(minutesOfDay / 60);
  const minute = Math.floor(minutesOfDay % 60);
  const suffix = hour >= 12 ? 'pm' : 'am';
  hour %= 12;
  if (hour === 0) hour = 12;
  return minute === 0 ? `${hour}${suffix}` : `${hour}:${String(minute).padStart(2, '0')}${suffix}`;
}

export default function DayRailDemo() {
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const tick = (now: number) => {
      startRef.current ??= now;
      setProgress(((now - startRef.current) % LOOP_MS) / LOOP_MS * 100);
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const currentMinutes = WORK_START_MIN + (progress / 100) * (WORK_END_MIN - WORK_START_MIN);
  const remainingMinutes = Math.max(0, Math.round(WORK_END_MIN - currentMinutes));
  const completedCount = TASKS.filter((task) => progress >= task.atPercent && task.atPercent !== 90).length;
  const carryingForward = progress >= 90;

  return (
    <section className="rail-demo" aria-label="Animated demonstration of Dokkit understanding what fits into a day">
      <header className="rail-demo-header">
        <div>
          <p className="rail-demo-kicker">Today</p>
          <p className="rail-demo-time mono">{formatTime(currentMinutes)}</p>
        </div>
        <div className="rail-demo-capacity">
          <span className="rail-demo-capacity-value mono">{Math.floor(remainingMinutes / 60)}h {remainingMinutes % 60}m</span>
          <span>left to work with</span>
        </div>
      </header>

      <div className="rail-demo-progress" aria-hidden="true">
        <div className="rail-demo-progress-fill" style={{ width: `${progress}%` }} />
        <span className="rail-demo-progress-now" style={{ left: `${progress}%` }} />
      </div>

      <div className="rail-demo-summary">
        <span>{completedCount} of 3 planned tasks done</span>
        <span>{carryingForward ? 'one task carried forward' : 'the day still fits'}</span>
      </div>

      <ol className="rail-demo-list">
        {TASKS.map((task) => {
          const complete = task.atPercent !== 90 && progress >= task.atPercent;
          const carrying = task.atPercent === 90 && carryingForward;
          const state = carrying ? 'carrying' : complete ? 'complete' : 'planned';

          return (
            <li className={`rail-demo-task is-${state}`} key={task.label}>
              <span className="rail-demo-status" aria-hidden="true">{complete ? '✓' : carrying ? '→' : ''}</span>
              <span className="rail-demo-task-copy">
                <strong>{task.label}</strong>
                <span>{carrying ? 'carrying forward' : task.time}</span>
              </span>
              <span className="rail-demo-duration mono">{task.duration}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
