import type { Metadata } from 'next';
import Link from 'next/link';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'Capture work, see what fits, check reality, and let Dokkit learn—without performing for a productivity system.',
};

const steps = [
  {
    title: 'Get it out of your head',
    body: 'Capture what needs doing—without ceremony. Dokkit holds it so you do not have to.',
  },
  {
    title: 'See what fits today',
    body: 'Today shows load and remaining time. Untimed work still counts. Fixed commitments stay visible even before calendar sync is complete.',
  },
  {
    title: 'Act, wait, or carry',
    body: 'Finish what belongs. Let the rest wait or move with a clear reason—not a guilt score.',
  },
  {
    title: 'Check reality',
    body: 'When the day ends (or when you are ready), Reality Check compares the plan with what happened.',
  },
  {
    title: 'Dokkit learns quietly',
    body: 'Durations, carry habits, and patterns update in the background. Next day’s plan gets a little closer to you.',
  },
];

export default function HowItWorksPage() {
  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">How it works</p>
        <h1>Less holding. Clearer decisions. Better fit.</h1>
        <p>
          Dokkit is not trying to make you do more. It helps you carry less, understand
          what matters, and decide what fits—then learns from reality instead of
          intention alone.
        </p>
      </section>

      <section className="prose-section">
        <ol className="steps-list">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <strong>{step.title}</strong>
                <p style={{ margin: '0.35rem 0 0', color: 'inherit', opacity: 0.9 }}>
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="final-cta compact-cta">
        <h2>Start with the day you have.</h2>
        <AppLink>Try Dokkit</AppLink>
        <p style={{ marginTop: '1rem' }}>
          <Link href="/pricing" className="text-link">
            Free vs Dokkit plan
          </Link>
        </p>
      </section>
    </main>
  );
}
