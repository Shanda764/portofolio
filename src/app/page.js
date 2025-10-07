"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LampBackground from "@/components/LampBackground";
//import SpiderWebBackground from "@/components/SpiderWebBackground";



export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Jaring Laba-laba */}
      <LampBackground />

      {/* Konten Utama */}
      <main className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between container mx-auto px-6 py-16 h-full gap-10">
        
        {/* Bagian Teks */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-100">
            <span className="text-indigo-500">Portfolio </span>
            {" Shanda Dwijri Syafly"}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Ini adalah halaman utama portfolio saya yang menampilkan berbagai proyek dan pengalaman saya.
          </p>
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Lihat Project
          </motion.a>
        </motion.div>

        {/* Bagian Foto Profil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
          <Image
            src="/koko.jpg"
            alt="Foto Profil"
            width={300}
            height={300}
            className="rounded-full shadow-xl border-4 border-indigo-500"
            priority
          />
        </motion.div>
      </main>
    </div>
  );
}
