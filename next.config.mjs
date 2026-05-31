/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // এটি যেন একদম সঠিক থাকে
      },
    ],
  },
};

export default nextConfig;