import type { Metadata } from 'next';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Start free with Today, tasks, and Reality Check. Dokkit plan adds Jobs, Meetings, and Travel — USD $6/month.',
};

const freeIncluded = [
  'A calm place for everything you are carrying',
  'Today shaped around the day you actually have',
  'Capture without ceremony',
  'Honest capacity—even when tasks have no time',
  'Selective carry with clear reasons',
  'Reality Check and learning from what happened',
  'Account and preferences on the web',
];

const dokkitIncluded = [
  'Everything in Free',
  'Jobs — multi-day work in one place',
  'Meetings — people, decisions, and follow-ups against the job',
  'Travel — trips, stops, and what fits around time away',
];

export default function PricingPage() {
  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">Pricing</p>
        <h1>Pay for more room—not for a different philosophy.</h1>
        <p>
          Free is real Dokkit: get the work out of your head and see what fits.
          The paid plan adds Jobs, Meetings, and Travel when your work needs those
          surfaces—not a harder system to maintain.
        </p>
      </section>

      <div className="pricing-grid">
        <section className="pricing-card">
          <div>
            <p className="eyebrow">Free</p>
            <p className="price">USD$0</p>
            <p>Core thinking and Today—no card required.</p>
          </div>
          <ul>
            {freeIncluded.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
          <AppLink>Start free</AppLink>
        </section>

        <section className="pricing-card pricing-card-emphasis">
          <div>
            <p className="eyebrow">Dokkit plan</p>
            <p className="price">
              USD$6<span className="price-interval">/month</span>
            </p>
            <p>Jobs, Meetings, and Travel when you need more room.</p>
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
        No forced trial, no countdown pressure. Price is <strong>USD $6/month</strong>,
        confirmed at checkout. Cancel anytime from Account → Billing. Calendar sync is
        not included yet—it is on the roadmap. Support:{' '}
        <a href="mailto:support@dokkit.space">support@dokkit.space</a>.
      </p>
    </main>
  );
}
