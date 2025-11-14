"use client";
import Link from "next/link";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md relative z-20">
      {/* My Portfolio bisa diklik */}
      <Link href="/" className="text-xl font-bold hover:text-blue-400">
        My Portfolio
      </Link>

      <div className="flex gap-6">
        <Link href="/" className="flex items-center gap-1 hover:text-blue-400">
          <FaHome /> Home
        </Link>
        <Link href="/about" className="flex items-center gap-1 hover:text-blue-400">
          <FaUser /> About
        </Link>
        <Link href="/projects" className="flex items-center gap-1 hover:text-blue-400">
          <FaProjectDiagram /> Projects
        </Link>
        <Link href="/contact" className="flex items-center gap-1 hover:text-blue-400">
          <FaEnvelope /> Contact
        </Link>
      </div>
    </nav>
  );
}
