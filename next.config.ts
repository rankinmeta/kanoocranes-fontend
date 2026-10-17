import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "https",
        hostname: "admin.kanoocranes.com",
      },
    ],
    dangerouslyAllowLocalIP: true,
  },
  allowedDevOrigins: ["192.168.1.3"],
};

export default nextConfig;
