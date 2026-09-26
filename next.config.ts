import type { NextConfig } from 'next';

/**
 * Where the Dokkit application is hosted.
 * Set DOKKIT_APP_ORIGIN on the marketing site’s Vercel project
 * (e.g. https://www.dokkit.space or https://task-manager-….vercel.app)
 * without a trailing slash. /app is rewritten there so Try Dokkit / Sign in work.
 */
const appOrigin = (
  process.env.DOKKIT_APP_ORIGIN || 'https://task-manager-one-chi-75.vercel.app'
).replace(/\/$/, '');

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/icon',
      },
      {
        source: '/app',
        destination: `${appOrigin}/app`,
      },
      {
        source: '/app/:path*',
        destination: `${appOrigin}/app/:path*`,
      },
    ];
  },
};

export default nextConfig;
