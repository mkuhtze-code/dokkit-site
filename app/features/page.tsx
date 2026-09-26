import type { Metadata } from 'next';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Today that fits, honest capacity, selective carry, Jobs, Meetings, Patterns, Travel and calendar—Dokkit surfaces that observe real work.',
};

const features: { title: string; copy: string; plan?: 'dokkit' }[] = [
  {
    title: 'Today that fits',
    copy: 'See what still belongs in the day: load, remaining time and the work already in motion.',
  },
  {
    title: 'Capture without ceremony',
    copy: 'Drop in a thought. Time, place and job can come along when they’re there—without filling a form first.',
  },
  {
    title: 'Honest capacity',
    copy: 'Estimates are optional. When they’re missing, Dokkit uses what it has learned so the day doesn’t look open when it isn’t.',
  },
  {
    title: 'Selective carry',
    copy: 'When the day is full, work that usually moves can shift forward with a clear reason. Same-day anchors stay protected.',
  },
  {
    title: 'Jobs',
    copy: 'Multi-day work as a lens over the same tasks—remaining time, what’s on today and what comes next.',
    plan: 'dokkit',
  },
  {
    title: 'Meetings',
    copy: 'Hold the conversation against the job: people, place, decisions and actions—without another system of record.',
    plan: 'dokkit',
  },
  {
    title: 'Patterns',
    copy: 'Quiet signals that change how the day is read: estimate feel, carry habits and recurring work—not a score.',
  },
  {
    title: 'Travel',
    copy: 'Locations, routes and the work around them stay in one picture when the day is on the road.',
    plan: 'dokkit',
  },
  {
    title: 'Calendar',
    copy: 'Keep existing commitments in view with Microsoft Calendar integration where supported. Work moves around what is fixed.',
    plan: 'dokkit',
  },
  {
    title: 'Web, ready for the field',
    copy: 'Use Dokkit at the desk, between jobs, or wherever the day changes shape.',
  },
];

export default function FeaturesPage() {
  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">Features</p>
        <h1>One personal picture of real work.</h1>
        <p>Each part of Dokkit helps it become more representative of the person using it. Features marked Dokkit plan need a subscription; everything else is available on Free.</p>
      </section>
      <section className="feature-list">
        {features.map((feature, index) => (
          <article key={feature.title}>
            <span className="feature-mark mono">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2>
                {feature.title}
                {feature.plan === 'dokkit' ? (
                  <span className="feature-plan-tag"> Dokkit plan</span>
                ) : null}
              </h2>
              <p>{feature.copy}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="final-cta compact-cta">
        <h2>See what fits.</h2>
        <AppLink>Try Dokkit</AppLink>
      </section>
    </main>
  );
}
