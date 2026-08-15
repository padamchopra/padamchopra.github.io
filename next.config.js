/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/v/:look", destination: "/", permanent: false },
      { source: "/press", destination: "/links", permanent: false },
      { source: "/watching", destination: "/watched", permanent: false },
    ]
  },
}

module.exports = nextConfig
