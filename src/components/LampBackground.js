"use client";
import React from "react";
import { LampContainer } from "../ui/lamp";

export default function LampBackground() {
  return (
    <div className="absolute top-0 left-0 w-full -z-10">
      {/* Lamp effect dari ui/lamp */}
      <div className="w-full h-full overflow-visible">
        <LampContainer />
      </div>

      {/* Layer warna gradasi biar menyatu penuh */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000a2a] to-[#000814] opacity-90" />
    </div>
  );
}
