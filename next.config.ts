import type { NextConfig } from "next";

// next.config.js
const nextConfig = {
  // your existing config
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.entract.me',
      },
    ],
  },
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
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://cloud.umami.is https://api-gateway.umami.dev; frame-src 'none';",
          },
        ],
      },
    ];
  }
}


export default nextConfig;
