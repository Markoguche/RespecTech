import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [exit, setExit] = useState(false);

  // Trigger exit sequence after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      // Allow exit animation to finish before removing component
      setTimeout(onComplete, 1200); 
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Variants for the Logo Entrance
  const textVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      opacity: 0, 
      scale: 1.1, 
      transition: { duration: 0.5 } 
    }
  };

  // Variants for the "Blind" Curtains
  const curtainVariants = {
    hidden: { y: 0 },
    exit: (i: number) => ({
      y: "100%",
      transition: { 
        delay: i * 0.1, // Stagger effect
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    })
  };

  const curtains = [0, 1, 2, 3, 4, 5]; // 6 bars

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-neutral-900 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: exit ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* The Horizontal Curtains (Background) */}
      <div className="absolute inset-0 grid grid-rows-6">
        {curtains.map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={curtainVariants}
            initial="hidden"
            animate={exit ? "exit" : "hidden"}
            className="bg-brand-600 border-b border-neutral-900/10"
          />
        ))}
      </div>

      {/* Animated Content (Logo) */}
      <AnimatePresence mode="wait">
        {!exit && (
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 bg-brand-500 rounded-full"
              />
              <span className="text-brand-500 tracking-[0.3em] text-xs font-bold uppercase">System Loading</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter">
              Respec<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Tech</span>
            </h1>

            {/* Progress Bar */}
            <div className="w-48 h-1 bg-neutral-800 mx-auto mt-8 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "circOut" }}
                className="h-full bg-brand-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SplashScreen;