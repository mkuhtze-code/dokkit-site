import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Space_Mono } from 'next/font/google';
import { SiteFooter, SiteHeader } from '@/components/site/SiteChrome';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', display: 'swap', weight: ['500', '600'] });
const spaceMono = Space_Mono({ subsets: ['latin'], variable: '--font-space-mono', display: 'swap', weight: ['400', '700'] });

export const metadata: Metadata = {
  title: { default: 'Dokkit — Know What Fits', template: '%s — Dokkit' },
  description: 'Dokkit is a personal thinking tool that observes how you work, remembers what it learns, and adapts when reality changes.',
  metadataBase: new URL('https://dokkit.space'),
  openGraph: { title: 'Dokkit — Know What Fits', description: 'A personal thinking tool that observes how you work and adapts when reality changes.', url: '/', siteName: 'Dokkit', locale: 'en_NZ', type: 'website' },
  twitter: { card: 'summary', title: 'Dokkit — Know What Fits', description: 'A personal thinking tool that adapts around the way you work.' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 5, themeColor: '#f1efe6' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceMono.variable}`}>
      <body><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
