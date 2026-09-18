const meetings = [
  {
    title: 'Site walk-through',
    when: 'Tue · 10:00',
    meta: 'Harbour Street · Tim, Sarah',
    bits: '1 decision · 2 actions',
  },
  {
    title: 'Quote review',
    when: 'Wed · 14:30',
    meta: 'Morris kitchen',
    bits: 'Notes captured',
  },
];

export default function MeetingsSnapshot() {
  return (
    <div className="meetings-snapshot" aria-label="Example Dokkit meetings list">
      <div className="snapshot-heading">
        <div>
          <p className="snapshot-kicker">Meetings</p>
          <p className="snapshot-title">Upcoming</p>
        </div>
        <span className="snapshot-count">2</span>
      </div>
      <div className="meetings-list">
        {meetings.map((m) => (
          <div className="meeting-row" key={m.title}>
            <span className="job-marker" aria-hidden="true" />
            <div className="job-copy">
              <p>{m.title}</p>
              <span>{m.meta}</span>
              <span className="meeting-bits">{m.bits}</span>
            </div>
            <span className="job-time mono">{m.when}</span>
          </div>
        ))}
      </div>
      <p className="snapshot-note">
        People, place and job stay with the conversation—not a separate system of
        record.
      </p>
    </div>
  );
}
