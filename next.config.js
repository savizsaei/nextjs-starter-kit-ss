// next.config.js
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Configure for any external image sources
  },
  experimental: {
    turbo: {}, // Enables TurboPack for faster builds
  },
};

module.exports = withNextIntl(nextConfig);