const signals = [
  'Website updates often move to the next work day.',
  'Quote revisions have been landing closer to the time you allow.',
];

const clusters = [
  { label: 'Quote revision', meta: '~45m', note: '×12' },
  { label: 'Site visit', meta: '~30m', note: '×8' },
  { label: 'Material order', meta: '~10m', note: '×5' },
];

export default function PatternsSnapshot() {
  return (
    <div className="patterns-snapshot" aria-label="Example Dokkit patterns view">
      <div className="snapshot-heading">
        <div>
          <p className="snapshot-kicker">Patterns</p>
          <p className="snapshot-title">Worth noticing</p>
        </div>
        <span className="snapshot-count">Estimate feel · on track</span>
      </div>
      <p className="patterns-observation">
        Quiet signals that tend to change how your day fits—not a score, just what
        the work has taught so far.
      </p>
      <div className="patterns-list">
        {signals.map((line) => (
          <div className="patterns-row" key={line}>
            <span className="patterns-row-task">{line}</span>
          </div>
        ))}
      </div>
      <p className="snapshot-note" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
        Repeating work
      </p>
      <div className="patterns-list">
        {clusters.map((c) => (
          <div className="patterns-row" key={c.label}>
            <span className="patterns-row-task">{c.label}</span>
            <span className="patterns-row-duration mono">{c.meta}</span>
            <span className="patterns-row-confidence">{c.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
