import type { Metadata } from 'next';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'See how Dokkit observes what work is like, remembers it, and adapts when plans change—including untimed work and selective carry.',
};

const sections = [
  [
    'Start with the work you have',
    'Dokkit begins with the day as it is: commitments, travel, jobs and the work already in motion.',
  ],
  [
    'Let work take its natural shape',
    'Tasks can carry an estimate, belong to a job, change order and move as the situation does. Untimed work still has a soft cost so the day doesn’t look empty when it isn’t.',
  ],
  [
    'Remember what actually happened',
    'Completed work feeds a quiet learning loop. Observed durations, carry habits and familiar patterns become part of how Dokkit reads the next day.',
  ],
  [
    'Adapt the plan',
    'When work arrives or circumstances change, Dokkit reshapes the plan around what actually happened and makes the trade-offs visible.',
  ],
  [
    'Carry work forward',
    'Unfinished work is not a failure. Items that usually move can shift to the next work day with a clear reason; work you typically finish the same day stays protected.',
  ],
  [
    'Build a clearer picture',
    'Patterns surfaces decision-useful signals—estimate feel, carry habits, recurring work—enough context for Dokkit to become more representative of you, without scoring the day.',
  ],
] as const;

export default function HowItWorksPage() {
  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">How it works</p>
        <h1>Dokkit observes, remembers and adapts.</h1>
        <p>
          You should not have to reshape your day to fit the tool. Dokkit is built to
          reflect the way your work actually unfolds.
        </p>
      </section>
      <section className="content-list">
        {sections.map(([title, copy], index) => (
          <article key={title}>
            <span className="content-index mono">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="final-cta compact-cta">
        <h2>Start with the work you have.</h2>
        <AppLink>Try Dokkit</AppLink>
      </section>
    </main>
  );
}
