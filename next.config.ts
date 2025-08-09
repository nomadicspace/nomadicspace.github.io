import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['http://172.20.10.14:3000'],
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true
  },
  output: 'export',
  basePath: ''
};

export default nextConfig;
