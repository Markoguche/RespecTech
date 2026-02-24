import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Layout, Users, Rocket } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import ImageCarousel from '../components/ImageCarousel';
import { Link } from 'react-router-dom';
import { trainingPhotos, serviceOneImage, serviceTwoImage, serviceThreeImage } from '../utils/images';
import SEO from '../components/SEO'; // Add this

const detailedServices = [
  {
    title: "Tech Talent Training & Recruitment",
    image: serviceTwoImage,
    desc: "Bridging the skills gap through intensive, industry-aligned training programs like Data Analytics. We also connect top talent with global hiring partners.",
    points: ["UI/UX Design", "Software Development", "Cyber Security", "Artificial Intelligence", "Data Analytics", "Digital Marketing"],
    icon: Layout
  },
  {
    title: "Soft Skills Development",
    image: serviceOneImage,
    desc: "Bridging the skills gap through intensive, industry-aligned training programs like Data Analytics. We also connect top talent with global hiring partners.",
    points: ["Communication skills: public speaking", "professional presentation etc.",
            "Emotional Intelligence",
            "Time Management & Productivity",
            "CV Preparation & Interview Readiness",
            "Critical Thinking & Problem Solving",
            "Leadership & People Management",
            "Freelance Tools",
            "Work Place Ethics",
            "Teamwork & Collaboration Tools",
            "Personal & Social Media Branding"],
    icon: Users
  },
  {
    title: "Startup Accelerators & Incubation",
    image: serviceThreeImage,
    desc: "Including the Zuri Accelerator, we provide the fertile ground for early-stage startups to grow with mentorship and funding access.",
    points: ["Zuri Accelerator", "Servelead Accelerator", "Eligent Club UK accelerator"],
    icon: Rocket
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-10">
      <SEO 
        title="Our Services" 
        description="Explore RespecTech services including Tech Talent Training, Soft Skills Development, and Startup Accelerators. We turn ideas into reality."
      />
      {/* 1. PAGE HERO */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-6">
            What We Do
          </motion.h1>
        </motion.div>
      </section>

      {/* 2. DETAILED SERVICES */}
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
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRAINING IN ACTION CAROUSEL (photo1-12) */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-neutral-900 dark:text-white mb-4">Training in Action</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              A glimpse into our intensive AI & Data Analytics bootcamps where theory meets practice.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ImageCarousel images={trainingPhotos} title="AI & Data Analytics Training" autoPlay={true} />
          </motion.div>
        </div>
      </section>

      {/* PROCESS & OTHER SECTIONS (Keep existing code) */}
      {/* ... (Include the Process and Final CTA sections from previous Services code here) ... */}
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
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-700 transform -translate-x-1/2"></div>
              {['Discover', 'Design', 'Develop', 'Deploy'].map((step, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className={`relative flex items-center justify-between mb-16 ${i % 2 === 0 ? 'flex-row-reverse' : ''} md:justify-center`}
                >
                  <div className={`w-5/12 ${i % 2 === 0 ? 'text-left md:text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-2xl font-bold text-brand-400 mb-2">{step}</h3>
                    <p className="text-neutral-400">Ensuring excellence at every stage.</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-600 rounded-full border-4 border-neutral-900 transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(220,38,68,0.8)]"></div>
                  <div className="w-5/12 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

            <section className="py-24 bg-brand-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Journey?</h2>
          
          
          <Link to="/contact" className="px-10 py-4 bg-white text-brand-600 rounded-full font-bold hover:bg-neutral-100 hover:scale-105 transition-all duration-300 shadow-2xl inline-block">
            Contact Us Today
          </Link>
          
        </div>
      </section>
    </div>
  );
};

export default Services;