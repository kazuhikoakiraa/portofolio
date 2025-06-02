/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  // Removed deprecated experimental.appDir since it's default in Next.js 13+
}

module.exports = nextConfig