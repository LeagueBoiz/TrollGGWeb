/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false };
    return config;
  },
  images: {
    loader: 'imgix',
    path: '/',
  },
};

module.exports = nextConfig;
