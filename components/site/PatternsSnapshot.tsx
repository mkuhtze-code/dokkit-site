const signals = [
  'Website updates often move to the next work day.',
  'Quote revisions have been landing closer to the time you allow.',
];

const clusters = [
  { label: 'Quote revision', meta: '≈ 45m', note: '12×' },
  { label: 'Site visit', meta: '≈ 1h', note: '8×' },
  { label: 'Material order', meta: '≈ 15m', note: '5×' },
];

export default function PatternsSnapshot() {
  return (
    <div className="patterns-snapshot" aria-label="Example Dokkit patterns view">
      <div className="snapshot-heading">
        <div>
          <p className="snapshot-kicker">Patterns</p>
          <p className="snapshot-title">From your work so far</p>
        </div>
        <span className="snapshot-count">Quiet signals</span>
      </div>
      <p className="patterns-observation">
        Not a score—just what tends to change how your day fits.
      </p>
      <div className="patterns-list">
        {signals.map((line) => (
          <div className="patterns-row" key={line}>
            <span className="patterns-row-task">{line}</span>
          </div>
        ))}
      </div>
      <p className="snapshot-note" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
        Familiar work
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
