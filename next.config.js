/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Hapus atau komentari konfigurasi experimental yang tidak valid
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig