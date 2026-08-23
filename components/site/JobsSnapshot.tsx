const jobs = [
  { name: 'Harbour Street repair', detail: 'Site visit · 10:00', time: '45m' },
  { name: 'Morris kitchen', detail: 'Quote revision · before 3:00', time: '35m' },
  { name: 'Kauri build', detail: 'Material order · when confirmed', time: '15m' },
];

export default function JobsSnapshot() {
  return (
    <div className="jobs-snapshot" aria-label="Example Dokkit jobs list">
      <div className="snapshot-heading">
        <div>
          <p className="snapshot-kicker">Jobs</p>
          <p className="snapshot-title">This week</p>
        </div>
        <span className="snapshot-count">3 active</span>
      </div>
      <div className="jobs-list">
        {jobs.map((job) => (
          <div className="job-row" key={job.name}>
            <span className="job-marker" aria-hidden="true" />
            <div className="job-copy">
              <p>{job.name}</p>
              <span>{job.detail}</span>
            </div>
            <span className="job-time mono">{job.time}</span>
          </div>
        ))}
      </div>
      <p className="snapshot-note">Tasks stay connected to the work they belong to.</p>
    </div>
  );
}
