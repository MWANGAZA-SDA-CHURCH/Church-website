/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  // Remove unsupported options
  // output: 'standalone',  // Only if you're using static export
  // productionBrowserSourceMaps: false,  // Not needed in development
}

module.exports = nextConfig
