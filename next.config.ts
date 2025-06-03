import type { NextConfig } from "next";

// next.config.js
const nextConfig = {
  // your existing config
  async rewrites() {
    return [
      {
        source: '/stats/:match*',
        destination: 'https://cloud.umami.is/:match*',
      },
      {
        source: '/api/send',
        destination: 'https://cloud.umami.is/api/send',
      }
    ];
  }
}


export default nextConfig;
