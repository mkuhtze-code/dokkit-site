'use client';

import { useEffect, useState } from 'react';

type DemoItem = {
  id: string;
  label: string;
  mins: number;
  fits: boolean;
};

/** Realistic field-day blocks — never raw "90m" / "100m" in the UI. */
const ITEMS: DemoItem[] = [
  { id: 'reply', label: 'Reply to client', mins: 15, fits: true },
  { id: 'inspect', label: 'Site inspection', mins: 45, fits: true },
  { id: 'proposal', label: 'Draft proposal', mins: 90, fits: false },
  { id: 'quote', label: 'Revise quote', mins: 45, fits: true },
];

/** ~3h 30m open capacity for the remaining day */
const CAPACITY_MINS = 3 * 60 + 30;

const SLOTS = {
  before: { reply: 0, inspect: 1, proposal: 2, quote: 3 },
  captured: { reply: 0, inspect: 1, proposal: 2, quote: 3 },
  after: { reply: 0, inspect: 1, quote: 2, proposal: 3 },
} as const;

type Phase = keyof typeof SLOTS;

const ITEM_H = 54;
const LOOP_MS = 10000;

function formatDuration(mins: number): string {
  const m = Math.max(0, Math.round(mins));
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (h === 0) return `${r}m`;
  if (r === 0) return `${h}h`;
  return `${h}h ${r}m`;
}

export default function ReshuffleDemo() {
  const [phase, setPhase] = useState<Phase>('before');

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function schedule(fn: () => void, delay: number) {
      timers.push(
        setTimeout(() => {
          if (!cancelled) fn();
        }, delay)
      );
    }

    function run() {
      setPhase('before');
      schedule(() => setPhase('captured'), 1600);
      schedule(() => setPhase('after'), 3200);
      schedule(run, LOOP_MS);
    }

    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  const usedMins =
    phase === 'after'
      ? ITEMS.filter((i) => i.id !== 'proposal').reduce((s, i) => s + i.mins, 0)
      : phase === 'captured'
        ? ITEMS.reduce((s, i) => s + i.mins, 0)
        : ITEMS.filter((i) => i.id !== 'quote').reduce((s, i) => s + i.mins, 0);

  const over = usedMins > CAPACITY_MINS;

  return (
    <div
      className="reshuffle-demo"
      role="img"
      aria-label="Illustration of Dokkit reordering work so what fits today rises above what should wait"
    >
      <div className="reshuffle-demo-header">
        <span className="reshuffle-demo-header-label">
          {over ? 'Over capacity' : 'Fits today'}
        </span>
        <span className="reshuffle-demo-header-value mono">
          {formatDuration(usedMins)} / {formatDuration(CAPACITY_MINS)}
        </span>
      </div>
      <div className="reshuffle-demo-bar-track">
        <div
          className={`reshuffle-demo-bar-fill${over ? ' is-over' : ''}`}
          style={{
            width: `${Math.min((usedMins / CAPACITY_MINS) * 100, 100)}%`,
          }}
        />
      </div>

      <div className="reshuffle-demo-list">
        {ITEMS.map((item) => {
          const slot = SLOTS[phase][item.id as keyof (typeof SLOTS)['before']];
          const overflows =
            phase === 'captured' ||
            (phase === 'after' && item.id === 'proposal') ||
            (phase === 'before' && !item.fits && item.id === 'proposal');

          return (
            <div
              key={item.id}
              className={`reshuffle-demo-item${overflows && phase !== 'before' ? ' overflow' : ''}`}
              style={{ transform: `translateY(${slot * ITEM_H}px)` }}
            >
              <span
                className={`reshuffle-demo-dot ${overflows && phase !== 'before' ? 'hazard' : 'fits'}`}
                aria-hidden="true"
              />
              <span className="reshuffle-demo-label">{item.label}</span>
              <span className="reshuffle-demo-mins mono">
                {formatDuration(item.mins)}
              </span>
              {overflows && phase === 'after' && item.id === 'proposal' ? (
                <span className="reshuffle-demo-tag">Tomorrow</span>
              ) : overflows && phase === 'captured' ? (
                <span className="reshuffle-demo-tag">Tight</span>
              ) : null}
            </div>
          );
        })}
      </div>

      <p
        className={`reshuffle-demo-note ${phase === 'after' ? 'is-shown' : ''}`}
        aria-hidden={phase !== 'after'}
      >
        What fits stays up front. The long block waits—nothing lost, nothing forced.
      </p>
    </div>
  );
}
