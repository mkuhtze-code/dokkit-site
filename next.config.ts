import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/icon",
      },
      {
        source: "/app",
        destination: "https://task-manager-one-chi-75.vercel.app/app",
      },
      {
        source: "/app/:path*",
        destination: "https://task-manager-one-chi-75.vercel.app/app/:path*",
      },
    ];
  },
};

export default nextConfig;
