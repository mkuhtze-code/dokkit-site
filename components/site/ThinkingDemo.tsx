'use client';

import { useEffect, useState } from 'react';

const DEMO_TEXT = 'Revise quote';
const TYPE_MS = 70;
const RESET_PAUSE_MS = 2800;

/**
 * Capture → learned duration illustration.
 * Layout height is fixed for every phase so the page below does not jump on reloop.
 */
export default function ThinkingDemo() {
  const [typed, setTyped] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [showNote, setShowNote] = useState(false);

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
      // Soft reset: clear type first; keep lower slots fading via opacity only
      // (elements always reserve space — see CSS min-heights).
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
        <span className="thinking-demo-typed">{typed || '\u00a0'}</span>
        <span className="thinking-demo-caret" aria-hidden="true" />
      </div>

      {/* Reserved slots — always in document flow; only opacity changes */}
      <div className="thinking-demo-slot thinking-demo-slot-chip">
        <div
          className={`thinking-demo-chip${showSuggestion ? ' is-shown' : ''}${accepted ? ' accepted' : ''}`}
          aria-hidden={!showSuggestion}
        >
          Usually about 45m · 4 times before
        </div>
      </div>

      <div className="thinking-demo-slot thinking-demo-slot-field">
        <div
          className={`thinking-demo-field mono${accepted ? ' is-shown' : ''}`}
          aria-hidden={!accepted}
        >
          45m
        </div>
      </div>

      <div className="thinking-demo-slot thinking-demo-slot-note">
        <p
          className={`thinking-demo-note${showNote ? ' is-shown' : ''}`}
          aria-hidden={!showNote}
        >
          Capacity just got a little more honest.
        </p>
      </div>
    </div>
  );
}
