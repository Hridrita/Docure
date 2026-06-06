/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactCompiler: true,
  experimental: {
    serverExternalPackages: ['@better-auth/kysely-adapter', 'kysely'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', 
      },
    ],
  },
};

export default nextConfig;





