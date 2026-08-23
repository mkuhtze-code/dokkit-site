import type { Metadata } from 'next';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = { title: 'How it works', description: 'See how Dokkit uses available time, estimates and actual history to understand what fits.' };

const sections = [
  ['Start with the time you have', 'Dokkit begins with the day as it is: fixed commitments, travel and the room that remains around them.'],
  ['Give work a sense of time', 'Tasks can carry an estimate. That makes a list more than a collection of intentions—it becomes something that can be considered against capacity.'],
  ['Remember what actually happened', 'Time tracking and completed work give Dokkit a record of familiar tasks. Observed durations can make future estimates more useful, with confidence shown plainly.'],
  ['Check the whole day', 'When work arrives, Dokkit checks whether the day still holds together. It can put the work that fits first and make the trade-offs visible.'],
  ['Carry work forward', 'When reality changes, unfinished work is carried forward rather than treated as a failure. The plan stays alive because the day did.'],
  ['Notice patterns quietly', 'Over time, Patterns provides a calm look at estimates, recurring work and confidence—enough context to plan the next day with clearer eyes.'],
] as const;

export default function HowItWorksPage() {
  return <main className="page-main"><section className="page-intro"><p className="eyebrow">How it works</p><h1>Dokkit is not trying to make you work harder.</h1><p>It is trying to tell you what can actually fit.</p></section><section className="content-list">{sections.map(([title, copy], index) => <article key={title}><span className="content-index mono">{String(index + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</section><section className="final-cta compact-cta"><h2>Start with the day you have.</h2><AppLink>Try Dokkit</AppLink></section></main>;
}
