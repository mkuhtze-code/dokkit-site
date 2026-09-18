import type { Metadata } from 'next';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Today that fits, honest capacity, selective carry, Jobs, Patterns, Travel and calendar—Dokkit surfaces that observe real work.',
};

const features = [
  [
    'Today that fits',
    'See what still belongs in the day: load, remaining time and the work already in motion.',
  ],
  [
    'Capture without ceremony',
    'Drop in a thought. Time, place and job can come along when they’re there—without filling a form first.',
  ],
  [
    'Honest capacity',
    'Estimates are optional. When they’re missing, Dokkit uses what it has learned so the day doesn’t look open when it isn’t.',
  ],
  [
    'Selective carry',
    'When the day is full, work that usually moves can shift forward with a clear reason. Same-day anchors stay protected.',
  ],
  [
    'Jobs',
    'Multi-day work as a lens over the same tasks—remaining time, what’s on today and what comes next.',
  ],
  [
    'Patterns',
    'Quiet signals that change how the day is read: estimate feel, carry habits and recurring work—not a score.',
  ],
  [
    'Travel',
    'Locations, routes and the work around them stay in one picture when the day is on the road.',
  ],
  [
    'Calendar',
    'Keep existing commitments in view with Microsoft Calendar integration where supported. Work moves around what is fixed.',
  ],
  [
    'Web, ready for the field',
    'Use Dokkit at the desk, between jobs, or wherever the day changes shape.',
  ],
] as const;

export default function FeaturesPage() {
  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">Features</p>
        <h1>One personal picture of real work.</h1>
        <p>Each part of Dokkit helps it become more representative of the person using it.</p>
      </section>
      <section className="feature-list">
        {features.map(([title, copy], index) => (
          <article key={title}>
            <span className="feature-mark mono">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
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
