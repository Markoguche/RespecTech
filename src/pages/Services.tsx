import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Layout, Users, Rocket } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import serviceOneImage from '../assets/Service1.png';
import serviceTwoImage from '../assets/Service2.png';
import serviceThreeImage from '../assets/Service3.png';

const detailedServices = [
  {
    title: "Tech Product Design & Deployment",
    image: serviceOneImage,
    desc: "We transform abstract ideas into fully functional, scalable digital products. Our design-thinking approach ensures user-centric solutions.",
    points: ["UI/UX Design", "Web & Mobile Development", "Cloud Architecture"],
    icon: Layout
  },
  {
    title: "Tech Talent Training & Recruitment",
    image: serviceTwoImage,
    desc: "Bridging the skills gap through intensive, industry-aligned training programs. We also connect top talent with global hiring partners.",
    points: ["Physical Bootcamps", "Remote Learning", "Executive Placement"],
    icon: Users
  },
  {
    title: "Startup Accelerators & Incubation",
    image: serviceThreeImage,
    desc: "Providing the fertile ground for early-stage startups to grow. We offer mentorship, funding access, and technical infrastructure.",
    points: ["Mentorship", "Investor Access", "Legal Support"],
    icon: Rocket
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-10">
      {/* 1. PAGE HERO SECTION */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-6">
            What We Do
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Comprehensive technology solutions designed to elevate businesses and empower individuals across the continent.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. DETAILED SERVICES SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-32">
          {detailedServices.map((service, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <motion.div variants={fadeInUp} className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src={service.image} alt={service.title} className="w-full h-auto object-cover" />
                </div>
                <div className={`absolute -bottom-8 ${i % 2 !== 0 ? '-left-8' : '-right-8'} w-32 h-32 bg-brand-600/10 rounded-full -z-10`} />
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <div className="w-12 h-12 bg-brand-600 text-white rounded-lg flex items-center justify-center mb-6">
                  <service.icon size={24} />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">{service.title}</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-4 mb-10">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <CheckCircle className="text-brand-600 mr-3 w-5 h-5" />
                      {point}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center text-brand-600 font-bold hover:text-brand-700 transition-colors group">
                  Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-4xl font-bold text-center mb-20">Our Process</h2>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-700 transform -translate-x-1/2"></div>

              {[
                { step: "Discover", desc: "Deep dive into your needs and market landscape." },
                { step: "Design", desc: "Architecting robust and scalable solutions." },
                { step: "Develop", desc: "Agile development with continuous integration." },
                { step: "Deploy", desc: "Launch, monitor, and optimize for growth." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className={`relative flex items-center justify-between mb-16 ${i % 2 === 0 ? 'flex-row-reverse' : ''} md:justify-center`}
                >
                  <div className={`w-5/12 ${i % 2 === 0 ? 'text-left md:text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-2xl font-bold text-brand-400 mb-2">{item.step}</h3>
                    <p className="text-neutral-400">{item.desc}</p>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-600 rounded-full border-4 border-neutral-900 transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
                  <div className="w-5/12 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-neutral-900 dark:text-white">Why Choose RespecTech?</h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "Expert Team", desc: "Industry veterans guiding every project." },
              { title: "Proven Results", desc: "Track record of successful deployments." },
              { title: "Support 24/7", desc: "Dedicated support for all our partners." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="p-8 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm hover:shadow-xl border border-neutral-100 dark:border-neutral-800 hover:border-brand-500/50 transition-all"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-24 bg-brand-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <button className="px-10 py-4 bg-white text-brand-600 rounded-full font-bold hover:bg-neutral-100 hover:scale-105 transition-all duration-300 shadow-2xl">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;