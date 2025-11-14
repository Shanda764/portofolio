// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // wajib untuk GitHub Pages (static export)
  output: "export",

  // karena repo kamu bernama "portofolio"
  assetPrefix: process.env.NODE_ENV === "production" ? "/portofolio/" : "",

  // gambar harus unoptimized pada GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
