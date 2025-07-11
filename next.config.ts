// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'clqyfszptjb4gzut.public.blob.vercel-storage.com',
//         pathname: '/**',
//       },
//     ],
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// export default nextConfig;
// _____________________________________________

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'clqyfszptjb4gzut.public.blob.vercel-storage.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'jukj7pvzy9ps2u9i.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
