import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/navbar';
import Home from './components/pages/home';
import About from './components/pages/About';
import Skills from './components/pages/skills';
import Projects from './components/pages/project';
import Footer from './components/footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Optional: Prevent scrolling while loader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-black text-gray-200">
          <Navbar />
          <main>
            <Home />
            <About />
            <Skills />
            <Projects />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;