// next.config.js
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // <-- string, no colon
        hostname: 'imgur.com',
        port:'',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
