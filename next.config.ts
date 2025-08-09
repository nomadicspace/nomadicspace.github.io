import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['http://172.20.10.14:3000'],
  output: 'export',
  basePath: '',
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true
  },
};

export default nextConfig;
