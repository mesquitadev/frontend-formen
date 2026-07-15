/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // A home passou a ser o próprio linktree; mantém /links funcionando.
      { source: '/links', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
