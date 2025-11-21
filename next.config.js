/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'queryboat.ai',
      },
      {
        protocol: 'https',
        hostname: 'mcdindia.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'www.pbt.dance',
      },
      {
        protocol: 'https',
        hostname: 'poonatravels.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.tookanapp.com',
      },
      {
        protocol: 'https',
        hostname: 'jungleworks.com',
      }
    ],
  },
}

module.exports = nextConfig 