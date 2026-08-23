/**
 * Static representation of Dokkit's Patterns surface.
 * Shows estimate accuracy and plain-language observations.
 *
 * Placeholder for real product screenshots.
 */

export default function PatternsSnapshot() {
  return (
    <div className="patterns-snapshot">
      <div className="patterns-gauge">
        <div className="patterns-gauge-bar">
          <div className="patterns-gauge-fill" style={{ width: '78%' }} />
        </div>
        <span className="patterns-gauge-label">
          Your estimates are usually spot on
        </span>
      </div>

      <div className="patterns-row">
        <span className="patterns-row-task">Revise quote</span>
        <span className="patterns-row-duration mono">usually ~45m</span>
        <span className="patterns-row-confidence">well known</span>
      </div>
      <div className="patterns-row">
        <span className="patterns-row-task">Site inspection</span>
        <span className="patterns-row-duration mono">usually ~30m</span>
        <span className="patterns-row-confidence">fairly confident</span>
      </div>
      <div className="patterns-row">
        <span className="patterns-row-task">Draft proposal</span>
        <span className="patterns-row-duration mono">usually ~90m</span>
        <span className="patterns-row-confidence">well known</span>
      </div>
      <div className="patterns-row">
        <span className="patterns-row-task">Order materials</span>
        <span className="patterns-row-duration mono">usually ~10m</span>
        <span className="patterns-row-confidence">just noticed</span>
      </div>
    </div>
  );
}
