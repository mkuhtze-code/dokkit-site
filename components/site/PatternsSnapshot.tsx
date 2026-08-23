const observations = [
  ['Quote revision', 'usually 45m', 'well known'],
  ['Site visit', 'usually 30m', 'fairly confident'],
  ['Material order', 'usually 10m', 'just noticed'],
];

export default function PatternsSnapshot() {
  return (
    <div className="patterns-snapshot" aria-label="Example Dokkit patterns view">
      <div className="snapshot-heading">
        <div>
          <p className="snapshot-kicker">Patterns</p>
          <p className="snapshot-title">A few things Dokkit has noticed</p>
        </div>
      </div>
      <p className="patterns-observation">
        Quote revisions have taken less time lately than you first allowed for.
      </p>
      <div className="patterns-list">
        {observations.map(([task, duration, confidence]) => (
          <div className="patterns-row" key={task}>
            <span className="patterns-row-task">{task}</span>
            <span className="patterns-row-duration mono">{duration}</span>
            <span className="patterns-row-confidence">{confidence}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
