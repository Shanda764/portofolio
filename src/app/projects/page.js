'use client';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaGithub, FaLinkedin } from 'react-icons/fa';
import LampBackground from '@/components/LampBackground';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  const projects = [
    {
      title: 'Web Sistem Pengaduan Desa Kepau Jaya',
      icon: <FaServer size={40} className="text-yellow-400" />,
      image: '/portofolio/desa.png',
      description:
        'Sistem pengaduan online untuk warga desa yang memungkinkan pengguna untuk melaporkan masalah, memberikan masukan, dan memantau status pengaduan.',
      tech: ['JavaScript', 'Laravel', 'PHP', 'MySQL'],
      year: '2024',
    },
    {
      title: 'Web Sistem Point of Sale (POS) Toko Grosir',
      icon: <FaServer size={40} className="text-yellow-400" />,
      image: '/portofolio/grosir.png',
      description:
        'Sistem point of sale (POS) untuk toko grosir yang memungkinkan pencatatan transaksi, manajemen inventaris, dan laporan penjualan secara real-time.',
      tech: ['JavaScript', 'Laravel', 'PHP', 'MySQL'],
      year: '2024',
    },
    {
      title: 'Web Sistem Kasir Bengkel Motor',
      icon: <FaServer size={40} className="text-yellow-400" />,
      image: '/portofolio/kasirbengkel.png',
      description:
        'Sistem kasir untuk bengkel motor yang memungkinkan pencatatan transaksi, manajemen inventaris, dan laporan keuangan secara real-time.',
      tech: ['JavaScript', 'Laravel', 'PHP', 'MySQL'],
      year: '2024',
    },
    {
      title: 'Web Sistem Manajemen Inventaris',
      icon: <FaServer size={40} className="text-yellow-400" />,
      image: '/portofolio/inven.png',
      description:
        'Sistem manajemen inventaris yang memungkinkan pengguna untuk mengelola stok barang, melakukan pemesanan, dan memantau status inventaris secara real-time.',
      tech: ['JavaScript', 'Laravel', 'PHP', 'MySQL'],
      year: '2024',
    },
    {
      title: 'Web Sistem Peminjaman Buku Perpustakaan',
      icon: <FaServer size={40} className="text-yellow-400" />,
      image: '/portofolio/perpus.png',
      description:
        'Sistem peminjaman buku perpustakaan yang memungkinkan pengguna untuk meminjam dan mengembalikan buku secara online.',
      tech: ['JavaScript', 'Laravel', 'PHP', 'MySQL'],
      year: '2025',
    },
    {
      title: 'Web Sistem E-Surat SMK Negeri YPPI Tualang',
      icon: <FaServer size={40} className="text-yellow-400" />,
      image: '/portofolio/e-surat.png',
      description:
        'Sistem pengajuan surat untuk SMK Negeri YPPI Tualang, yang memungkinkan siswa untuk mengajukan surat secara online serta memantau status pengajuan.',
      tech: ['JavaScript', 'Laravel', 'PHP', 'MySQL'],
      year: '2025',
    },
    {
      title: 'Web Sistem Booking Barber Shop',
      icon: <FaServer size={40} className="text-yellow-400" />,
      image: '/portofolio/barbershope.png',
      description:
        'Sistem booking untuk barber shop yang memungkinkan pengguna untuk melakukan reservasi jadwal potong rambut secara online.',
      tech: ['JavaScript', 'Laravel', 'PHP', 'MySQL'],
      year: '2024',
    },
    {
      title: 'Website Portofolio Pribadi',
      icon: <FaLaptopCode size={40} className="text-green-400" />,
      image: '/portofolio/porto.png',
      description:
        'Website portofolio pribadi yang menampilkan profil, pengalaman, dan proyek dengan desain modern serta animasi interaktif menggunakan Framer Motion.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      year: '2025',
    },
    {
      title: 'Website Futsal Online',
      icon: <FaLaptopCode size={40} className="text-green-400" />,
      image: '/portofolio/futsal.png',
      description:
        'Website futsal online yang memungkinkan pengguna untuk memesan lapangan futsal secara mudah dan cepat dengan fitur kalender dan pembayaran online.',
      tech: ['Laravel', 'MySQL', 'php', 'JavaScript'],
      year: '2025',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background penuh menyatu */}
      <LampBackground />

      {/* Semua konten di atas background */}
      <section className="relative z-10 px-6 py-16 max-w-6xl mx-auto space-y-16">
        <motion.div className="space-y-16" initial="hidden" animate="visible" variants={containerVariants}>
          {/* Judul Halaman */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl font-bold text-indigo-400 mb-4">Proyek Saya</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
              Berikut adalah beberapa proyek yang telah saya kerjakan selama perjalanan saya di dunia pengembangan web
              dan analisis data.
            </p>

            {/* Tombol GitHub & LinkedIn */}
            <motion.div
              className="flex justify-center gap-4 mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="https://github.com/shanda764"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md text-base transition-colors duration-300 shadow-md"
              >
                <FaGithub size={20} /> GitHub Saya
              </Link>

              <Link
                href="https://www.linkedin.com/in/shandadwijri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-base transition-colors duration-300 shadow-md"
              >
                <FaLinkedin size={20} /> LinkedIn Saya
              </Link>
            </motion.div>
          </motion.div>

          {/* Daftar Proyek */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={'(max-width: 768px) 100vw,(max-width: 1024px) 50vw, 33vw'}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {project.icon}
                    <h2 className="text-2xl font-semibold text-indigo-300">{project.title}</h2>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 flex-1 text-justify">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-indigo-700/30 text-indigo-300 px-2 py-1 text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-right text-gray-500 text-sm">Tahun: {project.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
