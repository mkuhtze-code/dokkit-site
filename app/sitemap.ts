import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://dokkit.space';
  const paths = [
    '',
    '/how-it-works',
    '/features',
    '/pricing',
    '/about',
    '/faq',
    '/privacy',
    '/terms',
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/pricing' ? 0.9 : 0.7,
  }));
}

