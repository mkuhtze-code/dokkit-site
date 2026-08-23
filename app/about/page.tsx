import type { Metadata } from 'next';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = { title: 'About', description: 'Why Dokkit exists: a personal thinking tool for days that change shape.' };

export default function AboutPage() {
  return <main className="page-main"><section className="page-intro"><p className="eyebrow">About Dokkit</p><h1>Built because I needed it.</h1><p>Dokkit came from trying to manage real-world work where the day changes shape by the hour.</p></section><section className="prose-section"><p>A paper list can remember work. The list was never the problem. The problem was knowing whether the work on it still belonged in the day that was unfolding.</p><p>Some things wait on someone else. Some jobs run long. A visit moves, a call arrives, a route changes. Dokkit was built as a place to hold that reality without treating it as a failure.</p><p>It is not a replacement for the tools people already use. It is a quieter layer of understanding: a personal thinking tool that learns the shape of your working life.</p></section><section className="final-cta compact-cta"><h2>Make room for what fits.</h2><AppLink>Try Dokkit</AppLink></section></main>;
}
