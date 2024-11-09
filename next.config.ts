// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],               // Configure for any external image sources
  },
  experimental: {
    appDir: true,                           // Uses the new app directory
    turbo: true                             // Enables TurboPack for faster builds
  },
};

module.exports = nextConfig;
