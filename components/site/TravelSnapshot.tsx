/**
 * Static representation of Dokkit's Travel view.
 * Shows a trip card with day indicators.
 *
 * Placeholder for real product screenshots.
 */

export default function TravelSnapshot() {
  return (
    <div className="travel-snapshot">
      <div className="travel-trip-header">
        <span className="travel-trip-name">Wellington Client Visit</span>
        <span className="travel-trip-status">Day 2 of 4</span>
      </div>
      <div className="travel-trip-dates">Aug 14 – Aug 17</div>
      <div className="travel-trip-days">
        <div className="travel-day">
          <span className="travel-day-label">Mon</span>
          14
        </div>
        <div className="travel-day active">
          <span className="travel-day-label">Tue</span>
          15
        </div>
        <div className="travel-day">
          <span className="travel-day-label">Wed</span>
          16
        </div>
        <div className="travel-day">
          <span className="travel-day-label">Thu</span>
          17
        </div>
      </div>
    </div>
  );
}
