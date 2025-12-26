import { motion } from "framer-motion";
import { useEffect } from "react";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Slightly longer for dramatic build-up
    return () => clearTimeout(timer);
  }, [setLoading]);

  // Sequential line drawing with custom delays
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.3, type: "spring", duration: 2, bounce: 0.2 },
        opacity: { delay: i * 0.3, duration: 0.8 },
      },
    }),
  };

  // Glowing fill effect after structure is drawn
  const fillVariants = {
    hidden: { fillOpacity: 0 },
    visible: {
      fillOpacity: 0.15,
      transition: { delay: 2.5, duration: 1.5 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2 } }}
    >
      {/* Subtle concrete texture background */}
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/dark-concrete-wall-texture-background_1373-159.jpg')",
        }}
      />

      {/* Ambient glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-black to-blue-900/20" />

      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <svg width="200" height="200" viewBox="0 0 100 100" className="drop-shadow-2xl">
            {/* Ground line */}
            <motion.path
              d="M5 85 H95"
              stroke="url(#gradient-stroke)"
              strokeWidth="3"
              custom={0}
              variants={draw}
              initial="hidden"
              animate="visible"
            />

            {/* Left wall */}
            <motion.path
              d="M20 85 V30"
              stroke="url(#gradient-stroke)"
              strokeWidth="3"
              custom={1}
              variants={draw}
              initial="hidden"
              animate="visible"
            />

            {/* Right wall */}
            <motion.path
              d="M80 85 V30"
              stroke="url(#gradient-stroke)"
              strokeWidth="3"
              custom={2}
              variants={draw}
              initial="hidden"
              animate="visible"
            />

            {/* Roof */}
            <motion.path
              d="M15 32 L50 10 L85 32"
              stroke="url(#gradient-stroke)"
              strokeWidth="3"
              custom={3}
              variants={draw}
              initial="hidden"
              animate="visible"
            />

            {/* Windows & Door with subtle fill glow */}
            <motion.g variants={fillVariants} initial="hidden" animate="visible">
              {/* Left Window */}
              <motion.rect x="28" y="50" width="14" height="18" rx="2" fill="url(#glow-fill)" />
              {/* Right Window */}
              <motion.rect x="58" y="50" width="14" height="18" rx="2" fill="url(#glow-fill)" />
              {/* Door */}
              <motion.rect x="45" y="65" width="10" height="20" rx="1" fill="url(#glow-fill)" />
            </motion.g>

            {/* Gradient definitions */}
            <defs>
              <linearGradient id="gradient-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" /> {/* Amber */}
                <stop offset="50%" stopColor="#94a3b8" /> {/* Slate */}
                <stop offset="100%" stopColor="#60a5fa" /> {/* Blue */}
              </linearGradient>
              <linearGradient id="glow-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Elegant loading text with pulsing glow */}
        <motion.div
          className="mt-10 text-3xl md:text-4xl font-bold tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-gray-300 to-blue-400 drop-shadow-2xl">
            Constructing
          </span>
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ...
          </motion.span>
        </motion.div>

        {/* Subtle tagline */}
        <motion.p
          className="mt-4 text-lg text-gray-500 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
        >
          Crafting timeless spaces
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;