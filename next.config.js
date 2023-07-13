/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/details/:id',
          destination: '/details/[id]',
        },
      ];
    },} 

module.exports = nextConfig
