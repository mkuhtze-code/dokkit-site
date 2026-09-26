import type { Metadata } from 'next';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Start free with Today and core planning. Dokkit plan adds Jobs, Meetings, Travel, and calendar — USD$6/month.',
};

const freeIncluded = [
  'Today that fits the day you actually have',
  'Capture without ceremony',
  'Honest capacity when estimates are missing',
  'Selective carry with clear reasons',
  'Reality Check and learning from what actually happened',
  'Patterns where available',
  'Account, preferences, and web access',
];

const dokkitIncluded = [
  'Everything in Free',
  'Jobs — multi-day work in one place',
  'Meetings — people, decisions, and follow-ups against the job',
  'Travel — trips, stops, and what fits around time away',
  'Calendar integration (Microsoft, where supported)',
];

export default function PricingPage() {
  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">Pricing</p>
        <h1>Start free. Grow when it fits.</h1>
        <p>
          Free is real Dokkit — Today, tasks, and learning. The Dokkit plan adds Jobs,
          Meetings, Travel, and calendar when you want more room.
        </p>
      </section>

      <div className="pricing-grid">
        <section className="pricing-card">
          <div>
            <p className="eyebrow">Free</p>
            <p className="price">USD$0</p>
            <p>Core planning without a card.</p>
          </div>
          <ul>
            {freeIncluded.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
          <AppLink>Try Dokkit</AppLink>
        </section>

        <section className="pricing-card pricing-card-emphasis">
          <div>
            <p className="eyebrow">Dokkit</p>
            <p className="price">
              USD$6<span className="price-interval">/month</span>
            </p>
            <p>Jobs, Meetings, Travel, and calendar.</p>
          </div>
          <ul>
            {dokkitIncluded.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
          <AppLink>Get Dokkit</AppLink>
        </section>
      </div>

      <p className="page-note">
        No urgency, no trial traps, no forced trial. Price is <strong>USD $6/month</strong>,
        confirmed at Stripe Checkout. Upgrade or cancel anytime from Account → Billing in the app.
        Support: <a href="mailto:support@dokkit.space">support@dokkit.space</a>.
      </p>
    </main>
  );
}
