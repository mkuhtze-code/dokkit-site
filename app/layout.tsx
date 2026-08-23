import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Space_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['500', '600'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Dokkit — understand what fits',
  description:
    'Dokkit is a personal thinking tool that understands time. It helps you know what actually fits in your day.',
  openGraph: {
    title: 'Dokkit — understand what fits',
    description:
      'A personal thinking tool that understands time. Not more tasks. Not more pressure. Just an honest picture of what fits.',
    url: 'https://dokkit.space',
    siteName: 'Dokkit',
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Dokkit — understand what fits',
    description:
      'A personal thinking tool that understands time.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#f1efe6',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
