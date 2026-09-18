const jobs = [
  {
    name: 'Harbour Street repair',
    meta: '1 on today',
    next: 'Site visit',
    time: '1h 20m',
  },
  {
    name: 'Morris kitchen',
    meta: '2 on today',
    next: 'Revise quote',
    time: '55m',
  },
  {
    name: 'Kauri build',
    meta: 'Open',
    next: 'Order flashing',
    time: '3',
  },
];

export default function JobsSnapshot() {
  return (
    <div className="jobs-snapshot" aria-label="Example Dokkit jobs list">
      <div className="snapshot-heading">
        <div>
          <p className="snapshot-kicker">Jobs</p>
          <p className="snapshot-title">Open</p>
        </div>
        <span className="snapshot-count">3 open</span>
      </div>
      <div className="jobs-list">
        {jobs.map((job) => (
          <div className="job-row" key={job.name} style={{ alignItems: 'flex-start' }}>
            <span className="job-marker" aria-hidden="true" style={{ marginTop: 6 }} />
            <div className="job-copy">
              <p>{job.name}</p>
              <span>{job.meta}</span>
              <span style={{ display: 'block', marginTop: 2, color: 'var(--ink-faint)' }}>
                Next: {job.next}
              </span>
            </div>
            <span className="job-time mono">{job.time}</span>
          </div>
        ))}
      </div>
      <p className="snapshot-note">
        Remaining time uses the same sense of capacity as Today—even when some tasks
        have no estimate yet.
      </p>
    </div>
  );
}
