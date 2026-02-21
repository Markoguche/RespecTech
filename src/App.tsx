import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion'; // AnimatePresence is not needed here anymore as the component handles it internally
import { Moon, Sun } from 'lucide-react';
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen'; // Import the new splash screen
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Impact from './pages/Impact';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Dark Mode Init
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

  // Custom Cursor Logic
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

  // Handle Splash Screen Completion
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
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

      {/* Splash Screen Component */}
      {loading && <SplashScreen onComplete={handleLoadingComplete} />}

      {/* Main App Router */}
      {!loading && (
        <Router>
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
      )}
    </>
  );
};

export default App;