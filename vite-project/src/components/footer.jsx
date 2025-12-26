import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/dinesh-suthar-037069257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      href: "https://github.com/Dino7354",
      label: "GitHub",
      icon: FaGithub,
    },
    {
      href: "https://www.instagram.com/_stroke_boy_?igsh=OXJmMm1xdXdoeDYw",
      label: "Instagram",
      icon: FaInstagram,
    },
  ];

  return (
    <footer className="py-16 md:py-20 relative bg-black text-gray-400 overflow-hidden">
      {/* Subtle concrete texture overlay */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/dark-grunge-texture-background_1373-404.jpg')",
        }}
      />

      {/* Deep gradient for architectural depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/40 to-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Copyright with subtle entrance */}
        <motion.p
          className="mb-12 text-lg md:text-xl font-medium tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          © 2025{" "}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-blue-400 drop-shadow-lg">
            Anil Suthar
          </span>
          . All rights reserved.
        </motion.p>

        {/* Social Links with glowing animated buttons */}
        <div className="flex justify-center items-center gap-12 md:gap-16">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glowing background ring */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-blue-500 opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-700" />

                {/* Icon container with shine */}
                <div className="relative p-5 rounded-full bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-md border border-gray-700/50 overflow-hidden">
                  {/* Sweeping shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />

                  <Icon
                    size={32}
                    className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-500 drop-shadow-lg group-hover:drop-shadow-2xl group-hover:shadow-amber-500/60"
                  />
                </div>

                {/* Label (visible on larger screens) */}
                <span className="block mt-4 text-sm md:text-base font-medium text-gray-500 group-hover:text-amber-400 transition-colors duration-500">
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Optional subtle closing line */}
        <motion.div
          className="mt-16 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent max-w-md mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
    </footer>
  );
};

export default Footer;