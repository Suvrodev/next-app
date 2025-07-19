import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // hostname "i.ibb.co"

  // images: {
  //   // remotePatterns: [new URL("https://assets.example.com/account123/**")],
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
