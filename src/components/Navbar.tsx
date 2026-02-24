import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
// 1. Import your logo image
import logoImage from '../assets/logo.png'; 

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Impact', path: '/impact' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          
          <Link to="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="RespecTech Logo" 
              className="h-36 md:h-28 w-auto transition-transform hover:scale-105" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium relative group cursor-pointer transition-colors ${
                  location.pathname === link.path 
                    ? 'text-brand-600 dark:text-brand-500' 
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-500'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-600 transition-all ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            <Link to="/contact" className="px-6 py-2.5 bg-brand-600 text-white text-sm font-medium rounded-full hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">
              Partner With Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button className="lg:hidden text-neutral-900 dark:text-white" onClick={() => setIsOpen(true)} aria-label="Open Menu">
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar (Keep existing code) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] lg:hidden bg-white dark:bg-neutral-950 flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-neutral-100 dark:border-neutral-800">
               {/* Mobile Logo */}
              <div className="text-xl font-bold">
                 <img src={logoImage} alt="Logo" className="h-10 w-auto" />
              </div>
              <button onClick={() => setIsOpen(false)} className="text-neutral-900 dark:text-white">
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-3xl font-display font-medium text-neutral-900 dark:text-white hover:text-brand-600 cursor-pointer block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;