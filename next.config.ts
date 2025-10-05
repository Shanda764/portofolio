import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portofolio",
  assetPrefix: "/portofolio/",
};

export default nextConfig;
