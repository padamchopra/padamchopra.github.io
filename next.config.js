/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/v/:look", destination: "/", permanent: false }]
  },
}

module.exports = nextConfig
