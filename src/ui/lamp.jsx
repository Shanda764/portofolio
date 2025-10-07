"use client";
import React from "react";

export function LampContainer({ children }) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Efek cahaya biru ke atas */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-transparent blur-3xl z-0 pointer-events-none" />
      
      {/* Efek lingkaran cahaya di bawah */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/30 blur-[200px] rounded-full z-0" />
      
      {/* Konten utama */}
      <div className="relative z-10 text-center">{children}</div>
    </div>
  );
}
