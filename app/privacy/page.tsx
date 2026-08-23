import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy', description: 'Dokkit privacy information.' };

export default function PrivacyPage() {
  return <main className="page-main"><section className="page-intro"><p className="eyebrow">Privacy</p><h1>Privacy information</h1><p>This page is a structured placeholder for Dokkit&apos;s privacy information and requires legal review before it is relied on.</p></section><section className="legal-copy"><h2>What this page will cover</h2><p>A complete privacy notice should identify the responsible legal entity, explain what information the service processes, why it is processed, how long it is retained, and how people can exercise their privacy rights.</p><h2>Product data</h2><p>Dokkit handles personal work information such as tasks, time and planning details. The final notice should describe the applicable product data practices precisely, including any connected calendar information.</p><h2>Contact and rights</h2><p>Contact details and jurisdiction-specific rights information need to be added by the responsible legal entity.</p><p className="page-note">Last updated: to be confirmed after legal review.</p></section></main>;
}
