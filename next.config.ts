// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 🔑 Wajib: aktifkan static export (Next.js 13.4+)
  output: 'export',

  // 📁 Opsional: jika deploy ke subdirectory seperti https://username.github.io/nama-repo/
  // Ganti "nama-repo" dengan nama repositori GitHub-mu
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portofolio/' : '',

  // 🖼️ Jika pakai next/image, nonaktifkan optimizer karena tidak kompatibel dengan static export
  images: {
    unoptimized: true,
  },

  // 🧪 Opsional: tambahkan konfigurasi lain sesuai kebutuhan (webpack, env, dll)
};

export default nextConfig;
