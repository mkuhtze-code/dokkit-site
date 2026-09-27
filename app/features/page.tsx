import type { Metadata } from 'next';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Today, capacity, carry, Reality Check, Jobs, Meetings, Travel, and Patterns—the surfaces that help Dokkit fit how you work.',
};

const features: {
  title: string;
  copy: string;
  plan?: boolean;
}[] = [
  {
    title: 'Today that fits',
    copy: 'See what still belongs in the day: load, remaining time, and the work already in motion—so you stop negotiating with a list that ignores the clock.',
  },
  {
    title: 'Capture without ceremony',
    copy: 'Drop a thought in. Time, place, and job can come along when they are there—without filling a form first.',
  },
  {
    title: 'Honest capacity',
    copy: 'Estimates are optional. When they are missing, Dokkit uses what it has learned so the day does not look open when it is not.',
  },
  {
    title: 'Selective carry',
    copy: 'When the day is full, work that usually moves can shift forward with a clear reason. Same-day anchors stay protected.',
  },
  {
    title: 'Reality Check',
    copy: 'Plans are hypotheses. Reality Check is how Dokkit learns what actually happened—quietly, without turning the evening into admin.',
  },
  {
    title: 'Jobs',
    copy: 'Multi-day work as a lens over the same tasks—remaining effort, what is on today, and what comes next.',
    plan: true,
  },
  {
    title: 'Meetings',
    copy: 'Hold the conversation against the job: people, place, decisions, and follow-ups—without a second system of record.',
    plan: true,
  },
  {
    title: 'Travel',
    copy: 'Trips, stops, and the work around them stay in one picture when the day is on the road.',
    plan: true,
  },
  {
    title: 'Patterns',
    copy: 'Quiet signals that change how the day is read: estimate feel, carry habits, recurring work—not a score.',
  },
];

export default function FeaturesPage() {
  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">Features</p>
        <h1>Built around the day you have—not a feature checklist.</h1>
        <p>
          Each surface exists to reduce mental load or make a better decision about
          what fits. Items marked Dokkit plan need a subscription; everything else is
          on Free.
        </p>
      </section>

      <section className="features-grid">
        {features.map((f, i) => (
          <article key={f.title} className="feature-card">
            <p className="feature-index mono">{String(i + 1).padStart(2, '0')}</p>
            <h2>
              {f.title}
              {f.plan ? <span className="feature-plan-tag"> Dokkit plan</span> : null}
            </h2>
            <p>{f.copy}</p>
          </article>
        ))}
      </section>

      <section className="page-note" style={{ marginTop: '2rem' }}>
        <p>
          <strong>Calendar sync</strong> (Microsoft) is on the roadmap and not fully
          available yet. Dokkit is designed to work alongside the calendar you already
          use.
        </p>
      </section>

      <section className="final-cta compact-cta">
        <h2>Get the work out of your head.</h2>
        <AppLink>Try Dokkit</AppLink>
      </section>
    </main>
  );
}
