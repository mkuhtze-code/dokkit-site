'use client';

import { useEffect, useRef, useState } from 'react';

/** Illustrative workday 8:00–16:00. Progress uses transform (smooth); clock updates per minute. */
const WORK_START_MIN = 8 * 60;
const WORK_END_MIN = 16 * 60;
const WORK_SPAN = WORK_END_MIN - WORK_START_MIN;
const LOOP_MS = 16000;

const TASKS = [
  { label: 'Client reply', time: '8:45 am', duration: '15m', atPercent: 10 },
  { label: 'Revise quote', time: '10:30 am', duration: '45m', atPercent: 32 },
  { label: 'Site visit', time: '1:00 pm', duration: '1h', atPercent: 58 },
  { label: 'Draft proposal', time: '3:00 pm', duration: '1h 30m', atPercent: 88 },
] as const;

function formatClock(minutesOfDay: number): string {
  let hour = Math.floor(minutesOfDay / 60);
  const minute = Math.floor(minutesOfDay % 60);
  const suffix = hour >= 12 ? 'pm' : 'am';
  hour %= 12;
  if (hour === 0) hour = 12;
  return minute === 0
    ? `${hour}${suffix}`
    : `${hour}:${String(minute).padStart(2, '0')}${suffix}`;
}

function formatRemaining(mins: number): string {
  const m = Math.max(0, Math.round(mins));
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (h === 0) return `${r}m`;
  if (r === 0) return `${h}h`;
  return `${h}h ${r}m`;
}

export default function DayRailDemo() {
  const [clockMin, setClockMin] = useState(WORK_START_MIN);
  const [progressPct, setProgressPct] = useState(0);
  const fillRef = useRef<HTMLDivElement>(null);
  const nowRef = useRef<HTMLSpanElement>(null);
  const lastShownMin = useRef(-1);

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      const t = 0.4;
      setClockMin(WORK_START_MIN + WORK_SPAN * t);
      setProgressPct(40);
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${t})`;
      if (nowRef.current) nowRef.current.style.left = `${t * 100}%`;
      return;
    }

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = ((now - start) % LOOP_MS) / LOOP_MS;
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${t})`;
      if (nowRef.current) nowRef.current.style.left = `${t * 100}%`;

      const minutesOfDay = WORK_START_MIN + t * WORK_SPAN;
      const rounded = Math.floor(minutesOfDay);
      if (rounded !== lastShownMin.current) {
        lastShownMin.current = rounded;
        setClockMin(rounded);
        setProgressPct(Math.round(t * 100));
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const remaining = Math.max(0, WORK_END_MIN - clockMin);
  const completedCount = TASKS.filter(
    (task) => progressPct >= task.atPercent && task.atPercent < 88
  ).length;
  const carryingForward = progressPct >= 88;

  return (
    <section
      className="rail-demo"
      aria-label="Illustrative example of capacity through a workday"
    >
      <header className="rail-demo-header">
        <div>
          <p className="rail-demo-kicker">Today</p>
          <p className="rail-demo-time mono">{formatClock(clockMin)}</p>
        </div>
        <div className="rail-demo-capacity">
          <span className="rail-demo-capacity-value mono">
            {formatRemaining(remaining)}
          </span>
          <span>left to work with</span>
        </div>
      </header>

      <div className="rail-demo-progress" aria-hidden="true">
        <div ref={fillRef} className="rail-demo-progress-fill" />
        <span ref={nowRef} className="rail-demo-progress-now" />
      </div>

      <div className="rail-demo-summary">
        <span>
          {carryingForward
            ? 'Day is full — long work can wait until tomorrow'
            : completedCount === 0
              ? 'Morning open · the day still fits'
              : `${completedCount} done · still room if estimates hold`}
        </span>
      </div>

      <div className="rail-demo-tasks">
        {TASKS.map((task) => {
          const isComplete =
            progressPct >= task.atPercent && task.atPercent < 88;
          const isCarrying = task.atPercent >= 88 && carryingForward;
          return (
            <div
              key={task.label}
              className={[
                'rail-demo-task',
                isComplete ? 'is-complete' : '',
                isCarrying ? 'is-carrying' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <span className="rail-demo-status" aria-hidden="true" />
              <div className="rail-demo-task-copy">
                <strong>{task.label}</strong>
                <span>{task.time}</span>
              </div>
              <span className="rail-demo-duration mono">{task.duration}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
