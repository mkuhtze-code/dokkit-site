import type { Metadata } from 'next';
import FaqList from '@/components/site/FaqList';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = { title: 'FAQ', description: 'Straight answers about what Dokkit is, how it works and who it is for.' };

export default function FaqPage() {
  return <main className="page-main"><section className="page-intro"><p className="eyebrow">FAQ</p><h1>Questions, answered plainly.</h1><p>Dokkit is meant to be understandable. Here is what it does and what it does not try to be.</p></section><section className="prose-section"><FaqList /></section><section className="final-cta compact-cta"><h2>Ready to see what fits?</h2><AppLink>Try Dokkit</AppLink></section></main>;
}
