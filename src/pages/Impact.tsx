import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Quote, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import ImageCarousel from '../components/ImageCarousel';
import { classPhotos, mapImage } from '../utils/images';
import SEO from '../components/SEO';
const Impact: React.FC = () => {
  return (
    <div className="pt-10">
      
      <SEO 
        title="Our Impact Across Africa" 
        description="Discover RespecTech's measurable impact across Africa. Over 6,000 talents trained, 1,100+ conference attendees, and countless success stories driving technological innovation."
      />

    
      <section className="py-24 relative overflow-hidden bg-neutral-50 dark:bg-neutral-900/30">
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
            Measurable results, real stories, and a growing network of innovators changing the continent.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. IMPACT METRICS (Updated with Conference Stats) */}
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
              { num: "1100", label: "Conf. Physical" },
              { num: "300", label: "Conf. Virtual" },
              { num: "6000+", label: "Talents Empowered" },
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

      {/* 3. RESPECTECH CONFERENCE & CLASSES CAROUSEL (photo13-16) */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
             >
              <div className="inline-flex items-center p-2 bg-brand-100 text-brand-700 rounded-lg mb-6">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">The Respectech Conference</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Gathering the Brightest Minds
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                Our annual conference brings together industry leaders, developers, and enthusiasts. We recently hosted 1,100 physical attendees and 300 virtual participants, fostering a massive exchange of knowledge.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                Beyond the conference, our daily classes at the Hub are designed to be interactive, collaborative, and intensive.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <ImageCarousel images={classPhotos} title="Classes at the Hub" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SUCCESS STORIES */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-12">Success Stories</h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { name: "Amina S.", role: "Data Analyst", text: "The intensive training gave me the hands-on experience needed to switch careers." },
              { name: "Chukwuemeka O.", role: "Startup Founder", text: "Through the Zuri accelerator, we secured our first round of funding." },
              { name: "Fatima D.", role: "Frontend Dev", text: "The mentorship I received was invaluable for my career growth." }
            ].map((story, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all relative"
              >
                <Quote className="text-brand-200 absolute top-6 right-6 w-8 h-8" />
                <p className="text-neutral-600 dark:text-neutral-300 italic mb-6 relative z-10">"{story.text}"</p>
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

      {/* 5. GEOGRAPHIC REACH */}
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
              <h2 className="font-display text-4xl font-bold text-neutral-900 dark:text-white mb-6">Bridging Borders</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                We operate remotely and physically across key hubs. Our remote-first approach ensures that talent from any region can access global opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. FUTURE VISION */}
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
          
        </motion.div>
      </section>
    </div>
  );
};

export default Impact;