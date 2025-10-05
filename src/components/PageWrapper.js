"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={typeof window !== "undefined" ? window.location.pathname : ""}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="container mx-auto px-6 py-12 min-h-[70vh]"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
