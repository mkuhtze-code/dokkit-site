import type { Metadata } from 'next';
import FaqList from '@/components/site/FaqList';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'What problem Dokkit solves, Free vs paid, learning, and calendar roadmap—answered plainly.',
};

export default function FaqPage() {
  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">FAQ</p>
        <h1>What you need to know before you trust it.</h1>
        <p>
          Straight answers about the problem Dokkit solves, what is free, what is paid,
          and what is still on the roadmap.
        </p>
      </section>
      <section className="prose-section">
        <FaqList />
      </section>
      <section className="final-cta compact-cta">
        <h2>Put the day down.</h2>
        <AppLink>Start free</AppLink>
      </section>
    </main>
  );
}
