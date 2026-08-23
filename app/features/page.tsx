import type { Metadata } from 'next';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = { title: 'Features', description: 'The Dokkit surfaces that observe work as it unfolds and adapt around real-world plans.' };

const features = [
  ['Tasks that adapt', 'Capture work as it arrives, then let Dokkit adjust the plan as priorities and circumstances change.'],
  ['Jobs', 'Keep site visits, quote revisions, installations and follow-ups connected to the job they belong to.'],
  ['Travel', 'Keep changing locations, routes and the work around them in the same picture.'],
  ['Patterns', 'Look back at actual work, recurring patterns and confidence without turning the day into a score.'],
  ['Calendar', 'Keep existing commitments in view with Microsoft Calendar integration where supported.'],
  ['Time tracking', 'Start and stop work to build a more useful record of how familiar tasks tend to unfold.'],
  ['Web and mobile', 'Use Dokkit at the desk, between jobs, or wherever the day changes shape.'],
] as const;

export default function FeaturesPage() {
  return <main className="page-main"><section className="page-intro"><p className="eyebrow">Features</p><h1>One personal picture of real work.</h1><p>Each part of Dokkit helps it become more representative of the person using it.</p></section><section className="feature-list">{features.map(([title, copy], index) => <article key={title}><span className="feature-mark mono">{String(index + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</section><section className="final-cta compact-cta"><h2>See what fits.</h2><AppLink>Try Dokkit</AppLink></section></main>;
}
