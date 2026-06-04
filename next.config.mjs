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
        hostname: 'i.ibb.co', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', 
      },
    ],
  },
  experimental: {
serverComponentsExternalPackages: ['@better-auth/kysely-adapter'],
},
};

export default nextConfig;