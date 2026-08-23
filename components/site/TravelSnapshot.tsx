export default function TravelSnapshot() {
  return (
    <div className="travel-snapshot" aria-label="Example Dokkit travel plan">
      <div className="snapshot-heading">
        <div>
          <p className="snapshot-kicker">Travel</p>
          <p className="snapshot-title">Wellington client visit</p>
        </div>
        <span className="travel-trip-status">Tue 15 Aug</span>
      </div>
      <div className="travel-route">
        <span>Thorndon</span>
        <span className="travel-route-line" aria-hidden="true" />
        <span>Te Aro</span>
      </div>
      <div className="travel-stops">
        <div className="travel-stop">
          <span className="travel-stop-time mono">9:30</span>
          <span>Site visit · Harbour Street</span>
          <span className="travel-stop-travel">12 min away</span>
        </div>
        <div className="travel-stop">
          <span className="travel-stop-time mono">11:15</span>
          <span>Client call · Victoria Street</span>
          <span className="travel-stop-travel">8 min away</span>
        </div>
      </div>
      <p className="snapshot-note">Time and location stay part of the same plan.</p>
    </div>
  );
}
