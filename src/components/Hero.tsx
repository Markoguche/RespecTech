import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';
import heroImage from '../assets/img1.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800 mb-6"
          >
            <Sparkles className="w-4 h-4 text-brand-600 mr-2" />
            <span className="text-xs font-semibold text-brand-700 dark:text-brand-300 tracking-wide uppercase">Africa's Tech Future</span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-neutral-900 dark:text-white mb-6">
            Connecting Tech Talent to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              Global & Local Opportunities
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg leading-relaxed"
          >
            RespecTech leverages technology to solve Africa’s most troublesome problems by empowering change makers with knowledge and opportunity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="services"
              smooth={true}
              className="px-8 py-4 bg-brand-600 text-white rounded-full font-semibold hover:bg-brand-700 transition-all hover:shadow-xl hover:shadow-brand-600/25 flex items-center justify-center group"
            >
              Explore Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="impact"
              smooth={true}
              className="px-8 py-4 border border-neutral-300 dark:border-neutral-700 rounded-full font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center"
            >
              See Our Impact
            </Link>
          </motion.div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ease-out border border-neutral-200 dark:border-neutral-800">
            <img src={heroImage} alt="Tech Talents Collaborating" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            
            {/* Floating Overlay Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-900 p-4 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-800 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600">
                ✓
              </div>
              <div>
                <p className="text-xs text-neutral-500">Trained Talents</p>
                <p className="font-bold text-neutral-900 dark:text-white">6,000+</p>
              </div>
            </motion.div>
          </div>
          {/* Decorative Elements behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-brand-200/50 to-blue-200/50 dark:from-brand-900/20 dark:to-blue-900/20 rounded-full blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;