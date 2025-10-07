// src/app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LampBackground from "../components/LampBackground";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio Next.js dengan background hitam-putih statis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* Background lamp effect */}
        <LampBackground />

        {/* Konten utama */}
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
