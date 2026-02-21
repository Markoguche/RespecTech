import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { name: "RespecTech", logo: "RT" },
  { name: "M.", logo: "M" },
  { name: "Zuri", logo: "Z" },
  { name: "HertechHub", logo: "H" },
  { name: "Gathr", logo: "G" },
  { name: "Ingres", logo: "I" }, // Extra for loop visual
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
          {[...companies, ...companies, ...companies].map((company, i) => (
            <div key={i} className="flex items-center justify-center space-x-2 group cursor-pointer">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center text-xl font-bold text-neutral-400 group-hover:text-brand-600 group-hover:scale-110 transition-all">
                {company.logo}
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