"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGraduationCap, FaUsers, FaCertificate, FaStar, FaDollarSign, FaBuilding } from "react-icons/fa";
import { SiLaravel, SiCodeigniter, SiNextdotjs, SiCss3, SiHtml5, SiPhp, SiJavascript, SiBootstrap,SiTailwindcss, SiTypescript } from "react-icons/si";
//import SpiderWebBackground from "components/SpiderWebBackground";
import LampBackground from "@/components/LampBackground";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const skills = [
    { name: "System Analyst", icon: <FaStar size={40} className="text-indigo-400" /> },
    { name: "Data Analyst", icon: <FaStar size={40} className="text-indigo-400" /> },
    { name: "Laravel", icon: <SiLaravel size={40} className="text-red-500" /> },
    { name: "CodeIgniter", icon: <SiCodeigniter size={40} className="text-red-600" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
    { name: "CSS", icon: <SiCss3 size={40} className="text-blue-500" /> },
    { name: "HTML5", icon: <SiHtml5 size={40} className="text-orange-500" /> },
    { name: "PHP", icon: <SiPhp size={40} className="text-indigo-600" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={40} className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-blue-400" /> },
    { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-500" /> },
  ];

  return (
    <div className="relative">
      {/* Background Jaring Laba-laba full screen */}
      <LampBackground />

      {/* Konten utama */}
      <section className="relative z-10 px-6 py-16 max-w-5xl mx-auto space-y-16">
        <motion.div
          className="space-y-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Profil */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-8 bg-gray-900/50 backdrop-blur-md rounded-xl p-6 shadow-lg">
           <Image
              src="/portofolio/koko.jpg"
              alt="Foto Profil"
              width={200}
              height={200}
              className="rounded-full shadow-lg border-4 border-indigo-500"
              unoptimized
            />
          <div>
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">Profil Saya</h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              Halo! Perkenalkan nama saya{" "}
              <span className="text-indigo-400 font-semibold">Shanda Dwijri Syafly</span>, saya lahir di Pekanbaru pada 29 Januari 2003.  
              Saya seorang <span className="text-indigo-400 font-semibold">Junior Web Developer</span> yang juga tertarik mengembangkan skill di{" "}
              <span className="text-indigo-400 font-semibold">System Analyst</span> dan{" "}
              <span className="text-indigo-400 font-semibold">Data Analyst</span>.  
              Terakhir, saya menempuh pendidikan Strata-1 (S1) di <span className="text-indigo-400 font-semibold">Universitas Muhammadiyah Riau</span> dengan program studi{" "}
              <span className="text-indigo-400 font-semibold">Sistem Informasi</span>, lama studi 4 tahun dengan IPK 3,65.  
              Saya memiliki keterampilan dalam pembuatan website dan pengembangan aplikasi web modern. Saya juga memiliki pengalaman dalam menganalisis data yang dibuktikan dengan penulisan skripsi saya dengan judul :  
              <em> Klasifikasi Serangan Jaringan Menggunakan Model Random Forest Pada data Intrusion Detection System (IDS)</em>.  
              Saya sangat antusias untuk terus belajar dan berkembang di bidang teknologi informasi.
            </p>
          </div>
          </motion.div>

          {/* Pendidikan */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-indigo-400 mb-4 flex items-center gap-2"><FaGraduationCap /> Pendidikan</h2>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              <li>Universitas Muhammadiyah Riau – Sistem Informasi</li>
              <li>SMA – Negri 02 Merangin (Ilmu Pengetahuan Alam)</li>
              <li>MTS – Negri 02 Merangin</li>
              <li>SD  – Negri 023 Merangin</li>
            </ul>
          </motion.div>

          {/* Pengalaman Organisasi */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-indigo-400 mb-4 flex items-center gap-2"><FaUsers /> Pengalaman Organisasi</h2>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              <li>Anggota Himpunan Mahasiswa Sistem Informasi</li>
              <li>Divisi Kaderisasi – (Organisasi Kampus)</li>
            </ul>
          </motion.div>

           {/* Pengalaman Kerja */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-indigo-400 mb-4 flex items-center gap-2"><FaBuilding/> Pengalaman Kerja</h2>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              <li>Barista – Bius Coffee (2021 - 2022)</li>
              <li>Freelancer Junior Web Developer (2024 - Sekarang)</li>
            </ul>
          </motion.div>

          {/* Sertifikat */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-indigo-400 mb-4 flex items-center gap-2"><FaCertificate /> Sertifikat</h2>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              <li>Sertifikat System Analyst (BNSP)</li>
              <li>Sertifikat Seminar Data Analyst </li>
              <li>Sertifikat Organisasi Himpunan Mahasiswa Sistem Informasi</li>
              <li>Sertifikat Ketua Pelaksana Kegiatan Latihan Dasar Organisasi</li>
              <li>Sertifikat Panitia Pelaksana Invest 2023</li>
              <li>Sertifikat Panitia Pelaksana Kegiatan Pengenalan Kampus Mahasiswa Baru</li> 
              <li>Sertifikat Panitia Pelaksana Kegiatan Kemah Kaderisasi Sistem Informasi</li>
              <li>Sertifikat Pelatih Grak Jalan Tingkat SD Se-Kabupaten Siak Sri Indrapura</li>
              <li>Sertifikat TOEFL</li>
            </ul>
          </motion.div>

          {/* Keahlian */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-indigo-400 mb-6 flex items-center gap-2"><FaStar /> Keahlian</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="bg-gray-800/70 px-4 py-3 rounded-xl shadow-md flex flex-col items-center gap-2 hover:bg-indigo-700 transition-transform duration-300"
                >
                  {skill.icon}
                  <span className="text-gray-200 font-semibold">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
