'use client';

import { useEffect, useState } from 'react';

const DEMO_TEXT = 'Revise quote';
const TYPE_MS = 70;
const RESET_PAUSE_MS = 2800;

export default function ThinkingDemo() {
  const [typed, setTyped] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function schedule(fn: () => void, delay: number) {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
      timers.push(id);
    }

    function run() {
      setTyped('');
      setShowSuggestion(false);
      setAccepted(false);
      setShowNote(false);

      DEMO_TEXT.split('').forEach((_, i) => {
        schedule(() => setTyped(DEMO_TEXT.slice(0, i + 1)), i * TYPE_MS);
      });

      const afterType = DEMO_TEXT.length * TYPE_MS;
      schedule(() => setShowSuggestion(true), afterType + 350);
      schedule(() => setAccepted(true), afterType + 1600);
      schedule(() => setShowNote(true), afterType + 2200);
      schedule(run, afterType + 2200 + RESET_PAUSE_MS);
    }

    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      className="thinking-demo"
      role="img"
      aria-label="Illustration of Dokkit recognizing repeated work and suggesting a usual duration"
    >
      <div className="thinking-demo-input">
        <span>{typed}</span>
        <span className="thinking-demo-caret" />
      </div>

      <div
        className={`thinking-demo-chip ${showSuggestion ? 'is-shown' : ''} ${accepted ? 'accepted' : ''}`}
        aria-hidden={!showSuggestion}
      >
        Usually about 45m · 4 times before
      </div>

      <div
        className={`thinking-demo-field mono ${accepted ? 'is-shown' : ''}`}
        aria-hidden={!accepted}
      >
        45m
      </div>

      <div
        className={`thinking-demo-note ${showNote ? 'is-shown' : ''}`}
        aria-hidden={!showNote}
      >
        Capacity just got a little more honest.
      </div>
    </div>
  );
}
