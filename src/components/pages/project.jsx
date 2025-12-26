import React from "react";
import { motion } from "framer-motion";
import { Globe, Shirt, Brain } from "lucide-react";
import { FaBaby } from "react-icons/fa";
import { WiDayCloudy } from "react-icons/wi";

const Projects = () => {
  // Section entrance
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  // Card variants with enhanced hover glow
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hover: {
      y: -12,
      transition: { duration: 0.4 },
    },
  };

  // Glowing underline for title
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "180px", transition: { duration: 1.2, delay: 0.8 } },
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative bg-black text-gray-200 overflow-hidden"
    >
      {/* Subtle concrete texture overlay */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/slightly-blotted-clean-pale-stucco-pattern_1194-7205.jpg')",
        }}
      />

      {/* Dark gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold tracking-wider uppercase mb-6"
            variants={cardVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-gray-300 to-blue-400 drop-shadow-2xl">
              My Projects
            </span>
          </motion.h2>

          {/* Animated glowing underline */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"
            variants={underlineVariants}
            initial="hidden"
            whileInView="visible"
          />

          <motion.p
            className="mt-8 text-lg md:text-xl text-gray-400 tracking-wide"
            variants={cardVariants}
          >
            A selection of my recent interior design and creative works
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Project Card Component Reused */}
          {[
            {
              icon: <Globe className="w-10 h-10" />,
              title: "Teert Yatra",
              desc: "A spiritual trip planner web app for Teerth pilgrimage spots. Users can explore destinations, book transport, and customize travel plans. Built with MERN stack.",
            },
            {
              icon: <Shirt className="w-10 h-10" />,
              title: "AI T-Shirt Customizer",
              desc: "An interactive web app to design stylish T-shirts using AI. Users can generate custom patterns, preview in 3D, and place orders. Built with React, Three.js & AI APIs.",
            },
            {
              icon: <Brain className="w-10 h-10" />,
              title: "Own AI (Gemini Clone)",
              desc: "A personal AI assistant built with modern LLM technology. Like Gemini, it can answer questions, generate content, and interact naturally. Built using Node.js, OpenAI API, and React.",
            },
            {
              icon: <WiDayCloudy className="w-10 h-10" />,
              title: "Real-Time Weather App",
              desc: "A responsive weather application built with React and Tailwind CSS. It fetches real-time weather data from the OpenWeatherMap API and dynamically updates the interface with animated backgrounds.",
              link: "https://weather-geniusio.netlify.app/",
            },
            {
              icon: <FaBaby className="w-10 h-10" />,
              title: "BabyTube",
              desc: "A fun and safe YouTube-like platform specially designed for babies. Bright visuals, gentle content, and baby-friendly navigation.",
              link: "https://babytub.netlify.app/",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => project.link && window.open(project.link, "_blank")}
            >
              {/* Card background with subtle glass/concrete feel */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-md p-8 rounded-xl border border-gray-800/50 overflow-hidden h-full flex flex-col">
                {/* Glowing border on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl shadow-2xl shadow-amber-500/40 group-hover:shadow-blue-500/60 transition-shadow duration-700" />
                </div>

                {/* Shine sweep effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />

                <div className="flex items-center space-x-5 mb-6">
                  <div className="p-4 bg-gradient-to-br from-amber-600/20 to-blue-600/20 rounded-lg text-amber-400 group-hover:text-blue-400 transition-colors duration-500">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-100">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 leading-relaxed flex-1">
                  {project.desc}
                </p>

                {project.link && (
                  <span className="mt-6 text-amber-400 group-hover:text-blue-400 text-sm uppercase tracking-wider font-medium">
                    View Live →
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;