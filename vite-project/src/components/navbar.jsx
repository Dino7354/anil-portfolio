import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiUser, FiBookOpen, FiFolder, FiFileText } from "react-icons/fi";
import Resume from "../assets/Dineshresume.pdf";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: <FiHome /> },
    { href: "#about", label: "About", icon: <FiUser /> },
    { href: "#skills", label: "Skills", icon: <FiBookOpen /> },
    { href: "#projects", label: "Projects", icon: <FiFolder /> },
    { href: Resume, label: "Resume", icon: <FiFileText />, download: true },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gray-900/90 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-3xl md:text-4xl font-black tracking-wider"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-gray-300 to-blue-400 drop-shadow-lg">
              Anil.architect
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.download ? (
                  <a
                    href={item.href}
                    download="Anil_Suthar_Resume.pdf"
                    className="relative group px-4 py-2 text-lg font-medium text-gray-300 uppercase tracking-wider overflow-hidden"
                  >
                    {/* Glowing underline */}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    
                    {/* Shine effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    
                    <span className="relative group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="relative group px-4 py-2 text-lg font-medium text-gray-300 uppercase tracking-wider overflow-hidden"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-3xl text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.aside
              className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-2xl z-50 p-8 shadow-2xl border-r border-gray-800/50"
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="mt-24 flex flex-col space-y-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    {...(item.download ? { download: "Anil_Suthar_Resume.pdf" } : {})}
                    className="flex items-center space-x-6 text-2xl font-medium text-gray-300 group"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-amber-600/20 to-blue-600/20 text-amber-400 group-hover:text-blue-400 transition-colors duration-500">
                      {item.icon}
                    </div>
                    <span className="group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;