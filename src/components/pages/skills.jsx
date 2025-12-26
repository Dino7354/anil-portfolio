import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaPython,
  FaTerminal,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 className="w-12 h-12" /> },
  { name: "CSS3", icon: <FaCss3Alt className="w-12 h-12" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-12 h-12" /> },
  { name: "React", icon: <FaReact className="w-12 h-12" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-12 h-12" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-12 h-12" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12" /> },
  { name: "GitHub", icon: <FaGithub className="w-12 h-12" /> },
  { name: "Python", icon: <FaPython className="w-12 h-12" /> },
  { name: "C", icon: <FaTerminal className="w-12 h-12" /> },
  { name: "C++", icon: <SiCplusplus className="w-12 h-12" /> },
  { name: "Termux", icon: <FaTerminal className="w-12 h-12" /> },
];

const Skills = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    hover: { y: -15, transition: { duration: 0.4 } },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "200px", transition: { duration: 1.4, delay: 0.8 } },
  };

  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative bg-black text-gray-200 overflow-hidden"
    >
      {/* Subtle architectural concrete texture */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/grunge-concrete-wall-texture-background_1373-315.jpg')",
        }}
      />

      {/* Deep gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/60 to-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold tracking-wider uppercase mb-6"
            variants={cardVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-gray-300 to-blue-400 drop-shadow-2xl">
              Skills
            </span>
          </motion.h2>

          {/* Glowing animated underline */}
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
            Technologies and tools that shape my craft
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Skill card with glass/concrete aesthetic */}
              <div className="relative bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700/50 h-full flex flex-col items-center justify-center overflow-hidden">
                {/* Hover glow border */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl shadow-2xl shadow-amber-500/50 group-hover:shadow-blue-500/70 transition-shadow duration-700" />
                </div>

                {/* Subtle shine sweep */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 skew-x-12" />

                {/* Icon with dynamic color glow */}
                <div
                  className="text-gray-400 group-hover:text-amber-400 transition-colors duration-500 drop-shadow-lg group-hover:drop-shadow-2xl group-hover:shadow-amber-500/60"
                >
                  {skill.icon}
                </div>

                <p className="mt-4 text-center font-medium text-gray-300 group-hover:text-white transition-colors duration-500">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;