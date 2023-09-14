/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-images.toolify.ai",
      "nav-station.oss-accelerate.aliyuncs.com",
      // "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
