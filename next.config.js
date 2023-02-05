/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'images.deliveryhero.io',
      },
    ],
  },
}

module.exports = nextConfig
