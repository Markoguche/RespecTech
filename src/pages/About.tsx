import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Zap, Users, Heart, Award } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import aboutImage from '../assets/About.png'; // Placeholder

const About: React.FC = () => {
  return (
    <div className="pt-10">
      {/* 1. PAGE HEADER SECTION */}
      <section className="py-20 md:py-32 bg-neutral-50 dark:bg-neutral-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(239,68,68,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-6">
            About RespecTech
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Empowering change makers with the knowledge and opportunity to solve Africa's most complex problems through technology.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={aboutImage} alt="Our Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-brand-600 rounded-bl-3xl" />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">Our Journey</h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                Founded with a singular vision to bridge the gap between raw African potential and global technological demands. RespecTech started as a small community of developers and has evolved into a premier ecosystem for training, recruitment, and startup incubation.
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                We believe that the solution to the continent's challenges lies within its people. By equipping them with world-class tools and methodologies, we are not just building careers; we are building an economy.
              </p>
              <button className="text-brand-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Read Full History <span>→</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION */}
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
            {/* Mission Card */}
            <motion.div 
              variants={fadeInUp}
              className="p-10 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-brand-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-600/20 rounded-full flex items-center justify-center mb-6 text-brand-400">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Our Mission</h3>
              <p className="text-neutral-300 leading-relaxed">
                To solve Africa's most troublesome problems by empowering change makers with knowledge and opportunity, creating a sustainable pipeline of tech talent.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              variants={fadeInUp}
              className="p-10 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-brand-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 text-blue-400">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Our Vision</h3>
              <p className="text-neutral-300 leading-relaxed">
                To be the leading catalyst for technological innovation in Africa, recognized globally for the quality and impact of the talent we produce.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Zap, title: "Innovation", desc: "We embrace new ideas and challenge the status quo." },
              { icon: Users, title: "Community", desc: "We grow by lifting others up together." },
              { icon: Heart, title: "Integrity", desc: "Honesty and transparency in all our dealings." },
              { icon: Award, title: "Excellence", desc: "Delivering world-class quality in everything we do." }
            ].map((value, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="text-center p-6"
              >
                <div className="inline-flex p-4 rounded-full bg-neutral-50 dark:bg-neutral-900 text-brand-600 mb-4">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">{value.title}</h4>
                <p className="text-sm text-neutral-500">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. LEADERSHIP SECTION */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-neutral-900 dark:text-white">Meet The Team</h2>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item} 
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-[3/4] bg-neutral-200 overflow-hidden">
                   {/* Placeholder for Team Image */}
                   <div className="w-full h-full bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center text-neutral-500 group-hover:scale-110 transition-transform duration-500">
                      Team Photo
                   </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-white font-bold text-lg">Team Member {item}</h4>
                    <p className="text-brand-400 text-sm">Role Title</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;