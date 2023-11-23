/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
