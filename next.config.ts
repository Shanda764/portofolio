import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portofolio",
  assetPrefix: "/portofolio/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
