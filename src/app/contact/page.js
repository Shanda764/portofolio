"use client";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gray-950 text-gray-200 overflow-hidden"
    >
      {/* 🌌 Background garis halus */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_1px,transparent_1px)] 
                   [background-size:40px_40px] opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950 opacity-90" />

      {/* Konten Utama */}
      <div className="relative z-10 max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6 drop-shadow-lg">
          Hubungi Saya
        </h1>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Anda dapat menghubungi saya melalui platform berikut.  
          Jangan ragu untuk terhubung dan berdiskusi mengenai proyek, kolaborasi, atau ide menarik lainnya!
        </p>

        {/* 🔗 Daftar Kontak */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
          {/* Email */}
          <a
            href="mailto:shandadwijri7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-800/60 hover:bg-gray-700/80 
                       transition rounded-2xl p-6 shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm"
          >
            <FaEnvelope className="text-3xl text-blue-400 mb-3" />
            <span className="text-sm text-gray-300">
              shandadwijri7@gmail.com
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/shandadwijri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-800/60 hover:bg-gray-700/80 
                       transition rounded-2xl p-6 shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm"
          >
            <FaLinkedin className="text-3xl text-blue-500 mb-3" />
            <span className="text-sm text-gray-300">
              linkedin.com/in/shandadwijri
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/shanda764"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-800/60 hover:bg-gray-700/80 
                       transition rounded-2xl p-6 shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm"
          >
            <FaGithub className="text-3xl text-gray-300 mb-3" />
            <span className="text-sm text-gray-300">github.com/shanda764</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6285218828685"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-800/60 hover:bg-gray-700/80 
                       transition rounded-2xl p-6 shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm"
          >
            <FaWhatsapp className="text-3xl text-green-400 mb-3" />
            <span className="text-sm text-gray-300">+62 852-1882-8685</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/shanda_ds"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-800/60 hover:bg-gray-700/80 
                       transition rounded-2xl p-6 shadow-lg hover:shadow-pink-500/20 backdrop-blur-sm"
          >
            <FaInstagram className="text-3xl text-pink-500 mb-3" />
            <span className="text-sm text-gray-300">@shanda_ds</span>
          </a>
        </div>

        {/* ✍️ Footer */}
        <p className="mt-16 text-sm text-gray-500">
          © {new Date().getFullYear()} Dibuat oleh{" "}
          <span className="text-blue-400 font-semibold hover:text-blue-300 transition">
            Shanda Dwijri Syafly
          </span>
        </p>
      </div>
    </section>
  );
}
