/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'pedidosya-api.whoknows.workers.dev',
      },
    ],
  },
}

module.exports = nextConfig
