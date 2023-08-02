/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*', 'avatars.githubusercontent.com', 'i.ibb.co'],
  },
}

module.exports = nextConfig
