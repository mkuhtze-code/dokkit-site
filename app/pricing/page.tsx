import type { Metadata } from 'next';
import { AppLink } from '@/components/site/SiteChrome';

export const metadata: Metadata = { title: 'Pricing', description: 'Dokkit is free: a personal thinking tool that observes work and adapts around you.' };

const included = ['Tasks that adapt around changing plans', 'Jobs', 'Travel planning', 'Patterns', 'Calendar integration where supported', 'Web and mobile access'];

export default function PricingPage() {
  return <main className="page-main"><section className="page-intro"><p className="eyebrow">Pricing</p><h1>Free, on purpose.</h1><p>Dokkit is currently free. No credit card and no trial period—just a tool that adapts around the way you work.</p></section><section className="pricing-card"><div><p className="eyebrow">Dokkit</p><p className="price">Free</p><p>Full access to the current Dokkit experience.</p></div><ul>{included.map((item) => <li key={item}>✓ {item}</li>)}</ul><AppLink>Try Dokkit</AppLink></section><p className="page-note">Pricing may evolve as Dokkit grows. If it does, this page will explain it plainly.</p></main>;
}
