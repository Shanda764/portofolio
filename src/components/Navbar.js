"use client";
import Link from "next/link";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex flex-col gap-4 md:flex-row md:justify-between md:items-center shadow-md relative z-20">
      <Link href="/" className="text-xl font-bold hover:text-blue-400">
        My Portfolio
      </Link>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
        <Link href="/" className="flex items-center gap-1 text-sm md:text-base hover:text-blue-400">
          <FaHome /> Home
        </Link>
        <Link href="/about" className="flex items-center gap-1 text-sm md:text-base hover:text-blue-400">
          <FaUser /> About
        </Link>
        <Link href="/projects" className="flex items-center gap-1 text-sm md:text-base hover:text-blue-400">
          <FaProjectDiagram /> Projects
        </Link>
        <Link href="/contact" className="flex items-center gap-1 text-sm md:text-base hover:text-blue-400">
          <FaEnvelope /> Contact
        </Link>
      </div>
    </nav>
  );
}
