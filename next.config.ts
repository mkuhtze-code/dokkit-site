import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/app/:path*",
        destination: "https://task-manager-one-chi-75.vercel.app/app/:path*",
      },
    ];
  },
};

export default nextConfig;
