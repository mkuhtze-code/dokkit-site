import type { Metadata } from 'next';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Dokkit exists so people can carry less in their heads and make better decisions about what fits.',
};

export default function AboutPage() {
  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">About Dokkit</p>
        <h1>Built because the list was never the hard part.</h1>
        <p>
          The hard part was knowing whether the work on it still belonged in the day that
          was actually unfolding.
        </p>
      </section>

      <section className="prose-section">
        <p>
          Some things wait on someone else. Some jobs take longer than expected. A visit
          moves, a call arrives, a route changes, or something more important appears.
          Real life doesn&apos;t follow the plan.
        </p>

        <p>
          Dokkit was built around that simple fact. Instead of asking you to constantly
          reorganise your life to fit the tool, Dokkit is designed to understand what is
          happening, recognise what tends to happen, and help you see what actually fits.
        </p>

        <p>
          It gives you somewhere to get things out of your head, a clearer view of what
          matters now, and a way to check plans against reality. When reality changes,
          Dokkit learns from it rather than treating the plan as something you failed to
          follow.
        </p>

        <p>
          Dokkit isn&apos;t trying to replace every tool you already use. It is a quieter
          layer underneath them — helping you decide what belongs in your day, what can
          wait, and what you can realistically take on.
        </p>

        <p>
          The aim is simple: less to carry in your head, and plans that make more sense in
          the life you&apos;re actually living.
        </p>
      </section>

      <section className="final-cta compact-cta">
        <h2>Make room for what fits.</h2>
        <AppLink>Try Dokkit</AppLink>
      </section>
    </main>
  );
}
