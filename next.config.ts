import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  images: {
    remotePatterns: [{ hostname: 'www.kommon.life' }],
  },
};

export default nextConfig;
