/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/250x250.png/**',
      }],
  },
};

module.exports = config;