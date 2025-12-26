import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  // Entrance variants for a dramatic architectural reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 1.8, delay: 1 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-gray-100 px-6"
    >
      {/* Subtle concrete texture overlay for architectural depth */}
      <div className="absolute inset-0 opacity-25 bg-[url('https://img.freepik.com/free-photo/slightly-blotted-clean-pale-stucco-pattern_1194-7205.jpg')] bg-cover bg-center mix-blend-overlay" />

      {/* Dark gradient overlay for luxury feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-gray-900/80 to-black/90" />

      <motion.div
        className="text-center max-w-5xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={childVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider uppercase mb-8"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-gray-100 to-blue-300 drop-shadow-2xl">
            Hi, I'm Anil Suthar
          </span>
        </motion.h1>

        {/* Elegant glowing divider line */}
        <motion.div
          variants={lineVariants}
          className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-12 max-w-md"
        />

        <motion.p
          variants={childVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-16 max-w-3xl mx-auto leading-relaxed text-gray-300 tracking-wide"
        >
          A passionate interior designer with 2 years of experience, crafting clean, creative, and timeless spaces using AutoCad, I moss, and Gstar.
        </motion.p>

        {/* Glowing animated button */}
        <motion.a
          href="#projects"
          variants={childVariants}
          className="relative inline-block px-10 py-5 text-lg md:text-xl font-bold uppercase tracking-widest overflow-hidden rounded-md group"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Gradient background */}
          <span className="absolute inset-0 bg-gradient-to-r from-amber-600 via-gray-700 to-blue-600 opacity-90" />

          {/* Glowing border & pulse effect */}
          <span className="absolute inset-0 rounded-md shadow-2xl shadow-amber-500/60 group-hover:shadow-blue-500/80 transition-shadow duration-700" />
          
          {/* Shine sweep animation */}
          <span className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 skew-x-12" />

          <span className="relative z-10 text-white">Explore Projects</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;