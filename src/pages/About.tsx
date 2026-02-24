import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, AlertTriangle, CheckCircle2, Lightbulb, Award, ShieldCheck } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import ImageCarousel from '../components/ImageCarousel';
import { hubPhotos, aboutImage } from '../utils/images';
import SEO from '../components/SEO'; 

const About: React.FC = () => {
  return (
    <div className="pt-10">
      
      <SEO 
        title="About RespecTech" 
        description="Learn about RespecTech's history, mission, and vision. Founded in 2023 to empower African youth with technical skills and global opportunities."
      />
      <section className="py-20 md:py-32 bg-neutral-50 dark:bg-neutral-900/30">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-6 text-center"
        >
          <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-6">
            About RespecTech
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Established in 2023 by Social Good Fund Africa to empower youth with skills and connect them to global employment opportunities.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. OUR STORY & BACKGROUND */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center mb-24"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                RespecTech was born out of a necessity to bridge the gap between the abundant potential of African youth and the technical requirements of the modern global workforce.
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                Founded in 2023 by the Social Good Fund Africa, our primary goal is to provide skills training and directly connect young people to employment. We address the root causes of unemployment by offering technical and soft skills training that are relevant to today's market.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutImage} alt="Our Team" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* THE PROBLEM & OUR SOLUTION */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="bg-red-50 dark:bg-red-900/10 p-8 rounded-3xl border border-red-100 dark:border-red-900/30"
            >
              <div className="flex items-center gap-4 mb-6 text-red-600">
                <AlertTriangle size={32} />
                <h3 className="text-2xl font-bold font-display">The Problem</h3>
              </div>
              <ul className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                  High unemployment rate across Africa.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                  Rampant digital illiteracy limiting opportunities.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                  Poverty and underdevelopment driven by lack of skills.
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="bg-green-50 dark:bg-green-900/10 p-8 rounded-3xl border border-green-100 dark:border-green-900/30"
            >
              <div className="flex items-center gap-4 mb-6 text-green-600">
                <CheckCircle2 size={32} />
                <h3 className="text-2xl font-bold font-display">Our Solution</h3>
              </div>
              <ul className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                  Comprehensive skills training programs.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                  Development of both technical and soft skills.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                  Direct connection to employment and global opportunities.
                </li>
              </ul>
            </motion.div>
          </div>

                    {/* 3. THE HUB SPACE (Carousel photo17-22) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="text-center mb-10">
              <h2 className="font-display text-4xl font-bold text-neutral-900 dark:text-white mb-4">The RespecTech Hub</h2>
              <p className="text-neutral-600 dark:text-neutral-400">A state-of-the-art environment designed for collaboration and learning.</p>
            </div>
            {/* Added autoPlay={true} below */}
            <ImageCarousel images={hubPhotos} title="RespecTech Hub Space" autoPlay={true} />
          </motion.div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-24 bg-neutral-900 text-white relative">
        <div className="absolute inset-0 bg-brand-900/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="p-10 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-brand-500/50 transition-all">
              <Target className="text-brand-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4 font-display">Our Mission</h3>
              <p className="text-neutral-300 leading-relaxed">
                To solve the problem of unemployment in Africa by providing youth with technical and soft skills and connecting them to employment.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-10 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-brand-500/50 transition-all">
              <Eye className="text-blue-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4 font-display">Our Vision</h3>
              <p className="text-neutral-300 leading-relaxed">
                To create a world where youth are equipped with the tech skills needed for the future, driving innovation and economic growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      {/* 4. CORE VALUES SECTION */}
<section className="py-24 bg-white dark:bg-neutral-950">
  <div className="container mx-auto px-6">
    <h2 className="text-center font-display text-4xl font-bold text-neutral-900 dark:text-white mb-16">Core Values</h2>
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {/* Value 1: Empowerment */}
      <motion.div variants={fadeInUp} className="text-center p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl">
        <Users className="text-brand-600 mx-auto mb-4" size={40} />
        <h4 className="text-xl font-bold mb-2">Empowerment</h4>
        <p className="text-sm text-neutral-500">Lifting others up through knowledge and opportunity.</p>
      </motion.div>

      {/* Value 2: Innovation */}
      <motion.div variants={fadeInUp} className="text-center p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl">
        <Lightbulb className="text-brand-600 mx-auto mb-4" size={40} />
        <h4 className="text-xl font-bold mb-2">Innovation</h4>
        <p className="text-sm text-neutral-500">Pioneering creative tech solutions for Africa's challenges.</p>
      </motion.div>

      {/* Value 3: Excellence */}
      <motion.div variants={fadeInUp} className="text-center p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl">
        <Award className="text-brand-600 mx-auto mb-4" size={40} />
        <h4 className="text-xl font-bold mb-2">Excellence</h4>
        <p className="text-sm text-neutral-500">Committed to the highest standards in training and delivery.</p>
      </motion.div>

      {/* Value 4: Integrity */}
      <motion.div variants={fadeInUp} className="text-center p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl">
        <ShieldCheck className="text-brand-600 mx-auto mb-4" size={40} />
        <h4 className="text-xl font-bold mb-2">Integrity</h4>
        <p className="text-sm text-neutral-500">Building trust through transparency and ethical practices.</p>
      </motion.div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default About;