import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Section entrance variants for an elegant "architectural reveal" (fade in with subtle scale and line draw feel)
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 overflow-hidden relative"
    >
      {/* Subtle architectural texture overlay (concrete-like) */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://media.istockphoto.com/id/1319844646/vector/grey-cement-texture-of-floor-vector-3d-backdrop-of-gray-concrete-wall-room-surface-with.jpg?s=612x612&w=0&k=20&c=JTiP-TB-iz797sgwZMkjDFzPGr4H86NrnJbvyczoOi8=')] bg-cover bg-center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={childVariants}
            className="text-5xl md:text-6xl font-bold text-center mb-12 tracking-wider uppercase"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-gray-300 to-blue-400 drop-shadow-2xl">
              About Me
            </span>
            {/* Subtle glowing underline animation */}
            <motion.div
              className="h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: "20%" }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </motion.h2>

          <motion.p
            variants={childVariants}
            className="text-lg md:text-xl lg:text-2xl text-center max-w-4xl mx-auto leading-relaxed tracking-wide"
          >
            I’m a passionate and aspiring interior designer with a strong foundation in{" "}
            <span className="font-bold text-amber-400 drop-shadow-md">AutoCad</span>,{" "}
            <span className="font-bold text-gray-300 drop-shadow-md">Gstar</span>, and{" "}
            <span className="font-bold text-blue-400 drop-shadow-md">I moss software</span>. As a recent interior
            design graduate, I am eager to apply my skills and creativity to real-world projects.
            <br /><br />
            I love crafting clean, responsive designs and learning new technologies to build exciting interior experiences.
          </motion.p>

          {/* Optional glowing CTA button with animation (architectural/elegant feel) */}
          <motion.div
            variants={childVariants}
            className="text-center mt-12"
          >
            <motion.button
              className="relative px-8 py-4 text-lg font-semibold text-white uppercase tracking-wider overflow-hidden rounded-md group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button background */}
              <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-blue-600 opacity-80" />
              
              {/* Glowing border effect */}
              <span className="absolute inset-0 rounded-md shadow-2xl shadow-amber-500/50 group-hover:shadow-blue-500/70 transition-shadow duration-700" />
              
              {/* Animated glow pulse */}
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white to-transparent opacity-30 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
              
              <span className="relative z-10">Explore My Work</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;