import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '../assets/img2.png';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden">
      <svg className="absolute top-0 left-0 w-full h-12 fill-white dark:fill-neutral-950" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={aboutImage} alt="About RespecTech" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply" />
            </div>
            {/* Grid decoration */}
            <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-brand-600 rounded-tl-3xl" />
            <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-brand-600 rounded-br-3xl" />
          </div>

          <div>
            <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Who We Are</span>
            <h2 className="font-display text-4xl font-bold mt-2 mb-6 text-neutral-900 dark:text-white">
              Empowering Change Makers Across the Continent
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
              RespecTech leverages technology to solve Africa’s most troublesome problems by empowering change makers with knowledge and opportunity. We are not just a training center; we are an ecosystem for growth.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Our mission is to bridge the gap between raw potential and global market requirements, creating a sustainable pipeline of world-class tech talent.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-700">
                <span className="block text-2xl font-bold text-brand-600">5+</span>
                <span className="text-xs text-neutral-500 uppercase">Years Active</span>
              </div>
              <div className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-700">
                <span className="block text-2xl font-bold text-brand-600">100%</span>
                <span className="text-xs text-neutral-500 uppercase">Commitment</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;