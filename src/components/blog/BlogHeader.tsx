"use client";
import { motion } from "framer-motion";

export default function BlogHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Blog de Tecnologia
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Artigos sobre React, Next.js, TypeScript, Inteligência Artificial e
        muito mais sobre desenvolvimento web e mobile.
      </p>
    </motion.div>
  );
}
