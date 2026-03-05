import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import your images
import comp1 from '../assets/comp1.jpg';
import comp2 from '../assets/comp2.jpg';
import comp3 from '../assets/comp3.jpg';
import comp4 from '../assets/comp4.jpg';
import comp5 from '../assets/comp5.jpg';

const companies = [
  { name: "RescueTap", logo: comp1 },
  { name: "M.", logo: comp2 },
  { name: "Zuri", logo: comp3 },
  { name: "Respectech", logo: comp4 },
  { name: "Gathr", logo: comp5 },
];

const Companies: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Duplicate companies for seamless loop (only 2 times instead of 4)
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section 
      id="companies" 
      className="py-16 bg-white dark:bg-neutral-950 overflow-hidden border-y border-neutral-100 dark:border-neutral-900"
    >
      <div className="text-center mb-10">
        <h3 className="text-neutral-500 font-medium uppercase tracking-widest text-xs">
          Tech Companies We've Built
        </h3>
      </div>
      
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-16"
          animate={!isReducedMotion ? {
            x: [0, -50 * companies.length] // More precise calculation
          } : {}}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15, // Reduced duration for smoother feel
              ease: "linear",
            },
          }}
          style={{ willChange: 'transform' }} // GPU acceleration hint
        >
          <AnimatePresence>
            {duplicatedCompanies.map((company, i) => (
              <motion.div
                key={`${company.name}-${i}`}
                className="flex items-center justify-center flex-shrink-0 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                style={{ willChange: 'transform' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative h-10 w-auto flex items-center justify-center overflow-hidden rounded">
                    {/* Optimized image with loading states */}
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      loading="lazy"
                      className="h-full w-auto object-contain transition-all duration-300 opacity-60 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
                      style={{ 
                        willChange: 'filter, opacity',
                        backfaceVisibility: 'hidden' // Prevent flicker
                      }}
                    />
                  </div>
                  <span className="text-lg font-semibold text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-900 dark:group-hover:text-white transition-all duration-300">
                    {company.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Optional: Add pause indicator */}
        {isPaused && !isReducedMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <div className="bg-black/50 text-white px-3 py-1 rounded-full text-xs">
              Paused
            </div>
          </motion.div>
        )}
      </div>

      {/* Static version for reduced motion */}
      {isReducedMotion && (
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {companies.map((company, i) => (
            <div
              key={company.name}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative h-10 w-auto flex items-center justify-center overflow-hidden rounded">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  loading="lazy"
                  className="h-full w-auto object-contain transition-all duration-300 opacity-60 group-hover:opacity-100"
                />
              </div>
              <span className="text-lg font-semibold text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-900 dark:group-hover:text-white transition-all duration-300">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Companies;