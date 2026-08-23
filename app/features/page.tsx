import type { Metadata } from 'next';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = { title: 'Features', description: 'The Dokkit surfaces that keep tasks, time, jobs and real-world plans together.' };

const features = [
  ['Tasks and time awareness', 'Give work an estimate, then see it in the context of the time you actually have.'],
  ['Jobs', 'Keep site visits, quote revisions, installations and follow-ups connected to the job they belong to.'],
  ['Travel', 'Plan around changing locations, routes and the practical time between visits.'],
  ['Patterns', 'Look back at actual and estimated time, recurring work and confidence without turning work into a score.'],
  ['Calendar', 'Keep existing commitments in view with Microsoft Calendar integration where supported.'],
  ['Time tracking', 'Start and stop work to build a more useful record of how long familiar tasks actually take.'],
  ['Web and mobile', 'Use Dokkit at the desk, between jobs, or wherever the day changes shape.'],
] as const;

export default function FeaturesPage() {
  return <main className="page-main"><section className="page-intro"><p className="eyebrow">Features</p><h1>One time model, applied to real work.</h1><p>Each part of Dokkit exists to help answer the same quiet question: what fits now?</p></section><section className="feature-list">{features.map(([title, copy], index) => <article key={title}><span className="feature-mark mono">{String(index + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</section><section className="final-cta compact-cta"><h2>See what fits.</h2><AppLink>Try Dokkit</AppLink></section></main>;
}
