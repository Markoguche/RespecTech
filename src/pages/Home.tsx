

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Quote, Star, ChevronLeft, ChevronRight, 
  Users, Code, Rocket, Globe, Zap, TrendingUp, Award, Target,
  ArrowUp, Sparkles, Layers, Shield, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Hero.png';
import partnersImage from '../assets/Partners.jpg';
import Companies from '../components/Companies';

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [progress, setProgress] = useState(20);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Testimonials data with Nigerian names
  const testimonials = [
    {
      name: "Chidi Okonkwo",
      role: "Full Stack Developer",
      company: "TechHub Lagos",
      content: "RespecTech transformed my career. The training was intensive and the job placement support was exceptional. I'm now working at a leading fintech company.",
      rating: 5,
      avatar: "CO"
    },
    {
      name: "Amina Bello",
      role: "UI/UX Designer",
      company: "Creative Studios",
      content: "The design program at RespecTech opened doors I never imagined. The mentorship and real-world projects prepared me for the industry.",
      rating: 5,
      avatar: "AB"
    },
    {
      name: "Tunde Adeyemi",
      role: "Data Scientist",
      company: "DataDrive Nigeria",
      content: "From zero to hero in 6 months! The data science bootcamp was challenging but rewarding. I'm now leading AI projects at my company.",
      rating: 5,
      avatar: "TA"
    },
    {
      name: "Ngozi Okafor",
      role: "Product Manager",
      company: "Innovate Africa",
      content: "RespecTech doesn't just teach skills, they build careers. The network and opportunities I gained are invaluable.",
      rating: 5,
      avatar: "NO"
    },
    {
      name: "Emeka Nwankwo",
      role: "DevOps Engineer",
      company: "CloudTech Solutions",
      content: "The best investment I made in my career. The instructors are industry experts and the curriculum is always up-to-date.",
      rating: 5,
      avatar: "EN"
    }
  ];

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setProgress(40);
    setTimeout(() => setProgress(60), 400);
    setTimeout(() => setProgress(80), 800);
    setTimeout(() => setProgress(100), 1200);
    setTimeout(() => setProgress(20), 1600);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(40);
    setTimeout(() => setProgress(60), 400);
    setTimeout(() => setProgress(80), 800);
    setTimeout(() => setProgress(100), 1200);
    setTimeout(() => setProgress(20), 1600);
  };

  // Animation variants with slower transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 20,
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const scaleVariants = {
    hidden: { scale: 0.6, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 15,
        duration: 1.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="overflow-x-hidden"
    >
      {/* 1. HERO SECTION - FULL SCREEN */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px] -z-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 150, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[100px] -z-10"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <motion.div 
              className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-brand-600 uppercase bg-brand-50 rounded-full"
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Sparkles className="inline w-3 h-3 mr-1" />
              RespecTech 2026
            </motion.div>
            <motion.h1 
              className="font-display text-5xl md:text-7xl font-bold leading-tight text-neutral-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Connecting Tech Talents to <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                Global & Local Opportunities
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg leading-relaxed"
              variants={itemVariants}
            >
              We empower the next generation of African innovators by bridging the gap between raw talent and global market demands.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.6 }}>
                <Link to="/services" className="px-8 py-4 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30 transition-all flex items-center group">
                  Explore Programs 
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.6 }}>
                <Link to="/contact" className="px-8 py-4 border border-neutral-300 dark:border-neutral-700 rounded-full font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all">
                  Partner With Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={scaleVariants} className="relative">
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800"
              animate={{
                rotate: [3, -3, 3],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <img src={heroImage} alt="Tech Talents" className="w-full h-auto object-cover" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-900 p-4 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-800 flex items-center gap-3"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <CheckCircle2 className="text-green-500 w-6 h-6" />
              </motion.div>
              <div>
                <p className="text-xs text-neutral-500">Global Reach</p>
                <p className="font-bold">100+ Countries</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST / SOCIAL PROOF SECTION */}
      <section className="py-16 border-y border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
        <div className="container mx-auto text-center">
          <Companies/>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW SECTION - FULL SCREEN */}
      <section className="min-h-screen flex items-center py-20 bg-white dark:bg-neutral-950 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-50/30 to-transparent opacity-50"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-500">Expertise</span>
              </h2>
              <motion.div 
                className="h-1 w-20 bg-brand-600 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
              />
            </motion.div>
            <motion.p 
              className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-6 text-lg"
              variants={itemVariants}
            >
              We provide end-to-end solutions for talent development and product deployment.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { 
                title: "Design & Deploy", 
                desc: "Building scalable products with modern tech stacks.",
                icon: Layers,
                color: "from-orange-500 to-red-500"
              },
              { 
                title: "Talent Training", 
                desc: "Intensive bootcamps turning novices into experts.",
                icon: Users,
                color: "from-orange-500 to-red-500"
              },
              { 
                title: "Incubation", 
                desc: "Nurturing startups from idea to market viability.",
                icon: Rocket,
                color: "from-orange-500 to-red-500"
              }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={scaleVariants}
                className="group relative"
              >
                <motion.div 
                  className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-brand-500/50 transition-all duration-700 h-full"
                  whileHover={{ 
                    y: -15,
                    boxShadow: "0 25px 50px rgba(124, 58, 237, 0.2)"
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  >
                    <service.icon size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{service.desc}</p>
                  
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
          >
            <Link to="services" className="inline-flex items-center text-brand-600 font-semibold text-lg hover:underline underline-offset-4 group">
              View All Services 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="ml-2"
              >
                <ArrowRight size={20} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. IMPACT STATS SECTION */}
      <section className="py-24 bg-gradient-to-br from-brand-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div 
          className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { num: 6000, label: "Talents", suffix: "+", icon: Users },
              { num: 500, label: "Graduates", suffix: "+", icon: Award },
              { num: 200, label: "Sessions", suffix: "+", icon: Target },
              { num: 5, label: "Startups Built", suffix: "+", icon: Rocket },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="group">
                <motion.div 
                  className="text-5xl md:text-6xl font-display font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    delay: i * 0.2,
                    stiffness: 30,
                    damping: 15,
                    duration: 1.5
                  }}
                >
                  {stat.num.toLocaleString()}{stat.suffix}
                </motion.div>
                <div className="text-brand-100 font-medium uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                  <stat.icon size={16} className="opacity-50" />
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. PARTNERS IMAGE SECTION - FULL SCREEN */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${partnersImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-neutral-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={itemVariants}
              className="font-display text-4xl md:text-6xl font-bold text-white mb-8"
            >
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-orange-400">Industry Leaders</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-neutral-300 mb-12 leading-relaxed"
            >
              We partner with leading technology companies and organizations to create opportunities for African talents.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {['SHI', 'AIDOS', 'The Kukah Center', 'UNDP', 'NeoCloud', 'Convexity', 'Geepay', 'AfriLabs'].map((partner, i) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 1, ease: "easeOut" }}
                  whileHover={{ scale: 1.1, y: -8 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="text-white font-bold text-lg">{partner}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-500">Graduates Say</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg"
            >
              Real stories from real people whose lives have been transformed.
            </motion.p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-8 md:p-12 border border-neutral-100 dark:border-neutral-800"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-brand-200 mb-4" />
                    <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 italic">
                      "{testimonials[currentTestimonial].content}"
                    </p>
                    <div>
                      <p className="font-bold text-lg text-neutral-900 dark:text-white">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-8 mt-12">
              <button
                onClick={handlePrev}
                className="relative group"
              >
                <div className="h-12 w-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center hover:bg-brand-100 dark:hover:bg-brand-900 transition-all group">
                  <ChevronLeft className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-brand-600" />
                </div>
                <motion.div 
                  className="absolute -top-2 left-1/2 -translate-x-1/2 h-1 w-12 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden"
                >
                  <motion.div 
                    className="h-full bg-brand-600 rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </motion.div>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index === currentTestimonial ? 'bg-brand-600 w-8' : 'bg-neutral-300 dark:bg-neutral-700'
                    }`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.4 }}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="relative group"
              >
                <div className="h-12 w-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center hover:bg-brand-100 dark:hover:bg-brand-900 transition-all group">
                  <ChevronRight className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-brand-600" />
                </div>
                <motion.div 
                  className="absolute -top-2 left-1/2 -translate-x-1/2 h-1 w-12 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden"
                >
                  <motion.div 
                    className="h-full bg-brand-600 rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </section>
      

     
{/* 7. CALL TO ACTION SECTION - FULL SCREEN */}
<section className="min-h-screen flex items-center justify-center relative overflow-hidden">
  {/* Animated Background Gradient */}
  <motion.div 
    className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700"
    animate={{
      background: [
        "linear-gradient(to bottom right, #ea580c, #dc2626, #c2410c)",
        "linear-gradient(to bottom right, #dc2626, #ea580c, #b91c1c)",
        "linear-gradient(to bottom right, #ea580c, #dc2626, #c2410c)"
      ]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
  />

  {/* Floating Orbs */}
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full blur-xl"
      style={{
        width: `${Math.random() * 200 + 50}px`,
        height: `${Math.random() * 200 + 50}px`,
        background: `radial-gradient(circle, rgba(251,146,60,${Math.random() * 0.3 + 0.1}) 0%, transparent 70%)`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [Math.random() * 150 - 75, Math.random() * 150 - 75, Math.random() * 150 - 75],
        y: [Math.random() * 150 - 75, Math.random() * 150 - 75, Math.random() * 150 - 75],
        scale: [1, 1.4, 1, 0.8, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 10 + Math.random() * 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: Math.random() * 5
      }}
    />
  ))}

  {/* Particles */}
  {[...Array(20)].map((_, i) => (
    <motion.div
      key={`particle-${i}`}
      className="absolute w-1 h-1 bg-orange-300 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -100, 0],
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 3,
        ease: "easeOut"
      }}
    />
  ))}

  {/* Content */}
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
    className="container mx-auto px-6 relative z-10 text-center"
  >
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "200px" }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="h-1 bg-gradient-to-r from-orange-300 to-red-300 mx-auto mb-8 rounded-full"
    />

    <motion.h2 
      variants={itemVariants}
      className="font-display text-4xl md:text-7xl font-bold text-white mb-8 leading-tight"
    >
      Ready to Shape the <br />
      <motion.span 
        className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Future of Tech
      </motion.span>
    </motion.h2>

    <motion.p
      variants={itemVariants}
      className="text-orange-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
    >
      Join thousands of African innovators building world-class products,
      launching startups, and securing global opportunities through
      RespecTech programs.
    </motion.p>

    <motion.div
      variants={itemVariants}
      className="flex flex-wrap justify-center gap-6"
    >
      <Link
        to="/services"
        className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all flex items-center gap-2"
      >
        Start Learning
        <ArrowRight className="w-5 h-5" />
      </Link>

      <Link
        to="/contact"
        className="px-8 py-4 border border-white/40 text-white rounded-full hover:bg-white/10 transition-all"
      >
        Talk to Us
      </Link>
    </motion.div>
  </motion.div>
</section>
</motion.div>
  );
};

export default Home;
          

        
      
    
