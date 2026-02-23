import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Quote } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import mapImage from '../assets/Map.png';

const stories = [
  { name: "Amina S.", role: "Frontend Dev", text: "RespecTech gave me the skills to land a job at a top fintech company." },
  { name: "Chukwuemeka O.", role: "Founder", text: "The accelerator program took our startup from idea to $50k funding." },
  { name: "Fatima D.", role: "Product Designer", text: "The mentorship I received was invaluable for my career growth." }
];

const Impact: React.FC = () => {
  return (
    <div className="pt-10">
      
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white dark:from-neutral-900 dark:to-neutral-950 -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] -z-10" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-6 text-center"
        >
          <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-6">
            Our Impact Across Africa
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Measurable results, real stories, and a growing network of innovators changing the continent one line of code at a time.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. IMPACT METRICS SECTION */}
      <section className="py-24 bg-white dark:bg-neutral-950 border-y border-neutral-100 dark:border-neutral-800">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { num: "6000+", label: "Talents Empowered" },
              { num: "50+", label: "Partner Companies" },
              { num: "12", label: "Countries Reached" },
              { num: "95%", label: "Placement Rate" }
            ].map((metric, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="text-5xl md:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-2">
                  {metric.num}
                </div>
                <div className="text-brand-600 font-medium uppercase tracking-wider text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SUCCESS STORIES SECTION */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-12">Success Stories</h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {stories.map((story, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg relative"
              >
                <Quote className="text-brand-200 absolute top-6 right-6 w-8 h-8" />
                <p className="text-neutral-600 dark:text-neutral-300 italic mb-6 relative z-10">
                  "{story.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
                  <div>
                    <div className="font-bold text-neutral-900 dark:text-white">{story.name}</div>
                    <div className="text-xs text-brand-600 uppercase">{story.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. GEOGRAPHIC REACH SECTION */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img src={mapImage} alt="Africa Map" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-900/40 flex items-center justify-center">
                <div className="text-white text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 animate-bounce" />
                  <p className="font-bold text-xl">Pan-African Reach</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Bridging Borders
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                We operate remotely and physically across key hubs in Nigeria, Kenya, Ghana, and South Africa. Our remote-first approach ensures that talent from any region can access global opportunities.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                  <div className="w-2 h-2 bg-brand-600 rounded-full mr-3" />
                  Lagos (HQ)
                </li>
                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                  <div className="w-2 h-2 bg-brand-600 rounded-full mr-3" />
                  Nairobi
                </li>
                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                  <div className="w-2 h-2 bg-brand-600 rounded-full mr-3" />
                  Accra
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. FUTURE VISION SECTION */}
      <section className="py-32 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-purple-900" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            The Future is Tech. The Future is Africa.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            We are just getting started. Join us in building the infrastructure for the next decade of innovation.
          </motion.p>
          <motion.button variants={fadeInUp} className="px-8 py-4 bg-white text-brand-700 rounded-full font-bold hover:bg-neutral-100 transition-colors">
            Join Our Vision
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Impact;