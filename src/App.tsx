import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Impact from './pages/Impact';
import Contact from './pages/Contact';
import logo from './assets/logo.png';

const App: React.FC = () => {
  // IMPROVEMENT: Initialize state directly from system preference to prevent "flashing" wrong color on load
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  
  const [loading, setLoading] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const moveCursor = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HelmetProvider>
        <div className="noise-overlay" />
        
        {/* Custom Cursor */}
        <div 
          ref={cursorRef}
          className="fixed top-0 left-0 w-8 h-8 border border-brand-600 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference transition-transform duration-75 ease-out"
        />
        <div className="fixed top-0 left-0 w-2 h-2 bg-brand-600 rounded-full pointer-events-none z-[9999] hidden md:block" id="cursor-dot" />

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed bottom-6 right-6 z-50 p-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Loading Screen */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              // CHANGE: Dynamic background class based on darkMode
              className={`fixed inset-0 z-[100] flex items-center justify-center transition-colors ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}
            >
              <motion.h1 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                // Removed text-white so it doesn't affect potential logos with transparent backgrounds
                className="font-display text-4xl md:text-6xl font-bold tracking-tighter"
              >
                <img src={logo} alt="RespecTech Logo" className="w-60 h-60" />
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        <Router>
          
          <SEO 
            title="Home" 
            description="RespecTech empowers African youth with tech skills, training, and startup incubation to solve local problems and connect with global opportunities."
          />
          <ScrollToTop />
          
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </HelmetProvider>
    </>
  );
};

export default App;