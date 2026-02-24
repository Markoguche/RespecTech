import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section id="companies" className="py-16 bg-white dark:bg-neutral-950 overflow-hidden border-y border-neutral-100 dark:border-neutral-900">
      <div className="text-center mb-10">
        <h3 className="text-neutral-500 font-medium uppercase tracking-widest text-xs">Tech Companies We've Built</h3>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-16 min-w-max"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...companies, ...companies, ...companies, ...companies].map((company, i) => (
            <div key={i} className="flex items-center justify-center space-x-3 group cursor-pointer">
              <div className="relative h-12 w-auto flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  // REMOVED 'grayscale' and 'group-hover:grayscale-0'
                  className="h-full w-auto object-contain opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
              <span className="text-xl font-bold text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;