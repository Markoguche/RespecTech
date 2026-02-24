import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import heroImage from '../assets/Hero.png'; 
import Companies from '../components/Companies';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="overflow-hidden"
    >
      {/* 1. HERO SECTION */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-brand-600 uppercase bg-brand-50 rounded-full">
              RespecTech 2026
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-neutral-900 dark:text-white mb-6">
              Connecting Tech Talent to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-500">
                Global & Local Opportunities
              </span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg leading-relaxed">
              We empower the next generation of African innovators by bridging the gap between raw talent and global market demands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="px-8 py-4 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30 transition-all flex items-center group">
                Explore Programs <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-neutral-300 dark:border-neutral-700 rounded-full font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                Partner With Us
              </Link>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-neutral-200 dark:border-neutral-800">
              <img src={heroImage} alt="Tech Talents" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-900 p-4 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-800 flex items-center gap-3 animate-bounce">
              <CheckCircle2 className="text-green-500 w-6 h-6" />
              <div>
                <p className="text-xs text-neutral-500">Global Reach</p>
                <p className="font-bold">100+ Countries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST / SOCIAL PROOF SECTION */}
      <section className="py-16 border-y border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
        <div className="container mx-auto text-center">
          <Companies/>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW SECTION */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold mb-4">Our Core Expertise</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              We provide end-to-end solutions for talent development and product deployment.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "Design & Deploy", desc: "Building scalable products with modern tech stacks." },
              { title: "Talent Training", desc: "Intensive bootcamps turning novices into experts." },
              { title: "Incubation", desc: "Nurturing startups from idea to market viability." }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-lg flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-brand-600 rounded-full" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link to="services"  className="text-brand-600 font-semibold hover:underline underline-offset-4">View All Services</Link>
          </div>
        </div>
      </section>

      {/* 4. IMPACT STATS SECTION */}
      <section className="py-24 bg-brand-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { num: 6000, label: "Talents", suffix: "+" },
              { num: 500, label: "Graduates", suffix: "+" },
              { num: 200, label: "Sessions", suffix: "+" },
              { num: 5, label: "Startups Built", suffix: "+" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="text-5xl md:text-6xl font-display font-bold mb-2">
                  {stat.num.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-brand-100 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-transparent to-transparent" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Shape the Future?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-300 max-w-2xl mx-auto mb-10 text-lg">
            Join thousands of talents and partners building the next generation of African technology.
          </motion.p>
          <Link to="contact" className="px-10 py-5 bg-white text-neutral-900 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Get Started Now
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;