import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.cdn.filesafe.space", pathname: "/**" },
    { protocol: "https", hostname: "images.leadconnectorhq.com", pathname: "/**" }
    ],
  },
};

export default nextConfig;
