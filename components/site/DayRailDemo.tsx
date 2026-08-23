'use client';

import { Fragment, useEffect, useRef, useState } from 'react';

const WORK_START_MIN = 8 * 60;
const WORK_END_MIN = 16 * 60;
const LOOP_MS = 13000;

const DEMO_TASKS: { label: string; atPercent: number }[] = [
  { label: 'Client reply', atPercent: 10 },
  { label: 'Revise quote', atPercent: 36 },
  { label: 'Site visit', atPercent: 64 },
  { label: 'Proposal', atPercent: 90 },
];

function fmtClock(minutesOfDay: number): string {
  let h = Math.floor(minutesOfDay / 60);
  const m = Math.floor(minutesOfDay % 60);
  const ampm = h >= 12 ? 'p' : 'a';
  h = h % 12;
  if (h === 0) h = 12;
  return m === 0 ? `${h}${ampm}` : `${h}:${String(m).padStart(2, '0')}${ampm}`;
}

export default function DayRailDemo() {
  const [percent, setPercent] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    function tick(now: number) {
      if (startRef.current === null) startRef.current = now;
      const elapsed = (now - startRef.current) % LOOP_MS;
      setPercent((elapsed / LOOP_MS) * 100);
      frameRef.current = requestAnimationFrame(tick);
    }
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const currentMinutes =
    WORK_START_MIN + (percent / 100) * (WORK_END_MIN - WORK_START_MIN);
  const carryForwardThreshold =
    DEMO_TASKS[DEMO_TASKS.length - 1].atPercent;

  return (
    <div
      className="rail-demo"
      role="img"
      aria-label="Animated demonstration of Dokkit's daily capacity view"
    >
      <div className="rail-demo-readout">
        <span className="rail-demo-time mono">{fmtClock(currentMinutes)}</span>
        <span className="rail-demo-label">today</span>
      </div>

      <div className="rail-demo-track">
        <div
          className="rail-demo-elapsed"
          style={{ width: `${percent}%` }}
        />
        <div
          className="rail-demo-now-dot"
          style={{ left: `${percent}%` }}
        />
        {DEMO_TASKS.map((t, i) => {
          const resolved =
            percent >= t.atPercent &&
            t.atPercent !== carryForwardThreshold;
          const carrying =
            t.atPercent === carryForwardThreshold && percent >= t.atPercent;
          const tier = i % 2 === 0 ? 'near' : 'far';
          return (
            <Fragment key={t.label}>
              <div
                className={`rail-demo-marker tier-${tier} ${resolved ? 'resolved' : ''} ${carrying ? 'carrying' : ''}`}
                style={{ left: `${t.atPercent}%` }}
              >
                <span className="rail-demo-marker-dot" />
                <span className="rail-demo-marker-label">{t.label}</span>
              </div>
              {carrying && (
                <div
                  className="rail-demo-carry-tag"
                  style={{ left: `${t.atPercent}%` }}
                >
                  carrying forward
                </div>
              )}
            </Fragment>
          );
        })}
      </div>

      <div className="rail-demo-endpoints">
        <span>{fmtClock(WORK_START_MIN)}</span>
        <span>{fmtClock(WORK_END_MIN)}</span>
      </div>
    </div>
  );
}
