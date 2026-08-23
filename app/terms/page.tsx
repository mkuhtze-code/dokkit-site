import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms', description: 'Dokkit terms information.' };

export default function TermsPage() {
  return <main className="page-main"><section className="page-intro"><p className="eyebrow">Terms</p><h1>Terms information</h1><p>This page is a structured placeholder for Dokkit&apos;s terms and requires legal review before it is relied on.</p></section><section className="legal-copy"><h2>What this page will cover</h2><p>A complete set of terms should identify the responsible legal entity, define the service, set out acceptable use, explain account responsibilities, and describe how changes to the service or terms are handled.</p><h2>Service availability</h2><p>The final terms should state the applicable availability, support, limitation of liability and governing-law terms based on the operator&apos;s actual legal and operational arrangements.</p><h2>Contact</h2><p>Legal contact details and the effective date need to be added by the responsible legal entity.</p><p className="page-note">Last updated: to be confirmed after legal review.</p></section></main>;
}
