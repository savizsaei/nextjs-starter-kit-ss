// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Configure for any external image sources
  },
  experimental: {
    turbo: {}, // Enables TurboPack for faster builds
  },
};

module.exports = nextConfig;
