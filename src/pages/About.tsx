import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  Lightbulb, 
  Award, 
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Star,
  TrendingUp,
  Clock,
  MapPin,
  Globe,
  Heart,
  Zap,
  BookOpen,
  Shield
} from 'lucide-react';

// Import your custom components and utilities
import { fadeInUp, staggerContainer } from '../utils/animations';
import ImageCarousel from '../components/ImageCarousel';
import { hubPhotos, aboutImage, ambassadorPhotos } from '../utils/images';
import SEO from '../components/SEO';
import Particles from '../components/Particles';

const About = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <SEO 
        title="About Us - Empowering African Tech Excellence"
        description="Learn about our mission to transform Africa's tech landscape through world-class education, innovation, and sustainable technology ecosystems."
      />
      
      <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen bg-white dark:bg-neutral-950 overflow-hidden relative"
      >
        {/* 1. HERO SECTION WITH PROMINENT PARTICLES */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* PROMINENT PARTICLES LAYER */}
          <div className="absolute inset-0 z-10">
            <Particles 
              className="w-full h-full"
              particleCount={100}
              particleSize={3}
              particleColor="#0ea5e9"
              particleSpeed={0.5}
              opacity={0.8}
              glowEffect={true}
            />
          </div>
          
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-orange-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900"
            style={{ y: backgroundY }}
          />

          {/* Floating Orbs */}
          <motion.div 
            className="absolute inset-0 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <motion.div 
              className="absolute top-20 left-20 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.5, 1],
                x: [0, 100, 0],
                y: [0, -100, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.5, 1],
                x: [0, -100, 0],
                y: [0, 100, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 10
              }}
            />
          </motion.div>

          {/* Content */}
          <div className="container mx-auto px-6 relative z-30">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <span className="px-4 py-2 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-full text-sm font-semibold backdrop-blur-sm">
                  About Our Journey
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight"
              >
                Empowering African
                <br />
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  Tech Excellence
                </motion.span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                We're on a mission to transform Africa's tech landscape by nurturing talent, 
                fostering innovation, and building sustainable technology ecosystems.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-brand-600 to-orange-500 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
                >
                  Our Story
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-neutral-300 dark:border-neutral-700 rounded-full font-bold text-lg hover:border-brand-600 transition-all duration-500 backdrop-blur-sm"
                >
                  Join Us
                </motion.button>
              </motion.div>

              {/* IMAGE CAROUSEL */}
              <motion.div 
                variants={fadeInUp}
                className="max-w-4xl mx-auto mb-12"
              >
                <ImageCarousel 
                  images={hubPhotos}
                  autoPlay={true}
                  showDots={true}
                  className="rounded-2xl overflow-hidden shadow-2xl"
                />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-8 h-8 mx-auto text-neutral-400" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. MISSION & VISION WITH ICONS */}
        <section className="py-24 relative">
          <Particles className="absolute inset-0 opacity-20" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInUp}>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.8 }}
                      className="w-12 h-12 bg-gradient-to-br from-brand-600 to-orange-500 rounded-full flex items-center justify-center"
                    >
                      <Target className="w-6 h-6 text-white" />
                    </motion.div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    To democratize access to world-class technology education and opportunities across Africa, 
                    empowering the next generation of innovators and leaders who will drive sustainable development 
                    and digital transformation on the continent.
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { num: "10K+", label: "Students", icon: Users },
                      { num: "50+", label: "Programs", icon: Award },
                      { num: "25+", label: "Countries", icon: Globe }
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2, duration: 1 }}
                        className="text-center group"
                      >
                        <motion.div
                          whileHover={{ y: -5 }}
                          className="mb-2"
                        >
                          <stat.icon className="w-8 h-8 mx-auto text-brand-600" />
                        </motion.div>
                        <div className="text-3xl font-bold text-brand-600">{stat.num}</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.8 }}
                      className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center"
                    >
                      <Eye className="w-6 h-6 text-white" />
                    </motion.div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    To establish Africa as a global technology hub where innovation flourishes, 
                    talent thrives, and technology solutions created on the continent solve 
                    local and global challenges, creating prosperity for all.
                  </p>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-6 h-6 text-brand-600" />
                      <h3 className="font-bold text-xl">Global Impact</h3>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Connecting African talent with global opportunities while fostering local innovation.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 3. CORE VALUES WITH CUSTOM ICONS */}
        <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50 dark:from-neutral-900 dark:to-neutral-900">
          <div className="container mx-auto px-6">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="font-display text-4xl md:text-5xl font-bold mb-6"
              >
                Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">Values</span>
              </motion.h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "Constantly pushing boundaries and exploring new possibilities",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  icon: ShieldCheck,
                  title: "Integrity",
                  description: "Upholding the highest standards in all we do",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Users,
                  title: "Community",
                  description: "Building strong networks that support and uplift each other",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "Delivering world-class quality in every program and initiative",
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -10, rotateX: 5 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.8 }}
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-xl mb-4 text-center">{value.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-center text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. CHALLENGES & SOLUTIONS SECTION */}
        <section className="py-24 relative">
          <Particles className="absolute inset-0 opacity-20" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="font-display text-4xl md:text-5xl font-bold mb-6"
              >
                Challenges We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Address</span>
              </motion.h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {[
                {
                  icon: AlertTriangle,
                  title: "Limited Access",
                  description: "Many Africans lack access to quality tech education and resources",
                  solution: "Providing affordable, world-class training programs"
                },
                {
                  icon: AlertTriangle,
                  title: "Brain Drain",
                  description: "Talent leaving Africa for opportunities elsewhere",
                  solution: "Creating local opportunities and global partnerships"
                },
                {
                  icon: AlertTriangle,
                  title: "Infrastructure Gap",
                  description: "Inadequate tech infrastructure in many regions",
                  solution: "Building sustainable tech ecosystems and hubs"
                }
              ].map((challenge, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                      <challenge.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="font-bold text-lg">{challenge.title}</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                    {challenge.description}
                  </p>
                  <div className="flex items-center gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600 font-medium">{challenge.solution}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. ABOUT IMAGE SECTION */}
        <section className="py-24 bg-gradient-to-br from-neutral-50 to-brand-50 dark:from-neutral-900 dark:to-neutral-800">
          <div className="container mx-auto px-6">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInUp}>
                <motion.img
                  src={aboutImage}
                  alt="About our organization"
                  className="w-full rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-8">
                <h2 className="font-display text-4xl md:text-5xl font-bold">
                  Making a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-500">Difference</span>
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Through our comprehensive programs and strategic partnerships, we're creating 
                  lasting impact across the African continent. Every graduate, every partnership, 
                  and every innovation brings us closer to our vision of a thriving African tech ecosystem.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Graduates Employed", value: "95%", icon: TrendingUp },
                    { label: "Partner Companies", value: "200+", icon: Award },
                    { label: "Success Rate", value: "98%", icon: CheckCircle2 },
                    { label: "Satisfaction", value: "4.9/5", icon: Star }
                  ].map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center">
                        <metric.icon className="w-5 h-5 text-brand-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-brand-600">{metric.value}</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">{metric.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* NEW SECTION: AMBASSADOR VISIT CAROUSEL */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-800 relative overflow-hidden">
          {/* Animated Background Particles */}
          <Particles 
            className="absolute inset-0 opacity-30"
            particleColor="#3b82f6"
            particleCount={80}
            particleSize={2}
            particleSpeed={0.3}
          />
          
          {/* Floating Decorative Elements */}
          <motion.div 
            className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -50, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, 50, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7.5
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              {/* Section Badge */}
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-8 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Shield className="w-5 h-5 text-blue-600" />
                </motion.div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Diplomatic Recognition</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2 
                variants={fadeInUp}
                className="font-display text-4xl md:text-6xl font-bold mb-6"
              >
                US Ambassador
                <br />
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  Visit Highlights
                </motion.span>
              </motion.h2>

              {/* Description */}
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed"
              >
                Honored to host the US Ambassador at our headquarters. This visit signifies international 
                recognition of our mission and opens doors for greater collaboration between African tech talent 
                and global opportunities.
              </motion.p>
            </motion.div>

            {/* Ambassador Carousel with Enhanced Animations */}
            <motion.div 
              variants={fadeInUp}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="max-w-6xl mx-auto mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-1000"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Carousel Container */}
                <div className="relative bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Decorative Corner Elements */}
                  <motion.div
                    className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-br-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-indigo-500/20 to-transparent rounded-tl-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  />

                  {/* Image Carousel */}
                   {/* IMAGE CAROUSEL */}
              <motion.div 
                variants={fadeInUp}
                className="max-w-4xl mx-auto mb-12"
              >
                <ImageCarousel 
                  images={ambassadorPhotos}
                  autoPlay={true}
                  showDots={true}
                  className="rounded-2xl overflow-hidden shadow-2xl"
                />
              </motion.div>

                  {/* Overlay Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-8 text-center"
                  >
                    <h3 className="font-bold text-2xl mb-3 text-neutral-800 dark:text-neutral-200">
                      Strengthening International Partnerships
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                      This historic visit marks a milestone in our journey, showcasing the global impact 
                      of our work and opening new avenues for collaboration.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Key Highlights Grid */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  icon: Globe,
                  title: "Global Recognition",
                  description: "International acknowledgment of our impact",
                  delay: 0
                },
                {
                  icon: Users,
                  title: "Diplomatic Relations",
                  description: "Building bridges with global partners",
                  delay: 0.2
                },
                {
                  icon: Award,
                  title: "Future Collaborations",
                  description: "Opening doors for new opportunities",
                  delay: 0.4
                }
              ].map((highlight, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    delay: highlight.delay, 
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:shadow-lg"
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-xl mb-3 text-neutral-800 dark:text-neutral-200">
                    {highlight.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            
            
          </div>
        </section>

        {/* 6. TIMELINE SECTION */}
        <section className="py-24 relative overflow-hidden">
          <Particles className="absolute inset-0 opacity-20" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="font-display text-4xl md:text-5xl font-bold mb-6"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-500">Journey</span>
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto"
              >
                Milestones that shaped our path
              </motion.p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-600 to-orange-500"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{ transformOrigin: "top" }}
              />
              
              {[
                {
                  year: "2018",
                  title: "The Beginning",
                  description: "Founded with a vision to transform African tech education",
                  align: "left"
                },
                {
                  year: "2019",
                  title: "First Cohort",
                  description: "Graduated 100 students from our inaugural program",
                  align: "right"
                },
                {
                  year: "2020",
                  title: "Expansion",
                  description: "Launched in 5 new African countries",
                  align: "left"
                },
                {
                  year: "2021",
                  title: "Partnership Growth",
                  description: "Secured partnerships with 20+ global tech companies",
                  align: "right"
                },
                {
                  year: "2023",
                  title: "10,000 Graduates",
                  description: "Reached our milestone of 10,000 successful graduates",
                  align: "left"
                }
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: milestone.align === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 1.5 }}
                  className={`flex items-center mb-12 ${
                    milestone.align === "left" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className={`w-5/12 ${milestone.align === "right" ? "text-right" : ""}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="text-3xl font-bold text-brand-600 mb-2">{milestone.year}</div>
                      <h3 className="font-bold text-xl mb-2">{milestone.title}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400">{milestone.description}</p>
                    </motion.div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="w-4 h-4 bg-white border-4 border-brand-600 rounded-full absolute left-1/2 transform -translate-x-1/2"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CALL TO ACTION */}
        <section className="py-24 bg-gradient-to-br from-brand-600 via-orange-600 to-red-600 relative overflow-hidden">
          <Particles 
            className="absolute inset-0 opacity-50"
            particleColor="#ffffff"
            particleCount={80}
            particleSize={2}
          />
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(to bottom right, #0ea5e9, #f97316, #ef4444)",
                "linear-gradient(to bottom right, #ef4444, #0ea5e9, #f97316)",
                "linear-gradient(to bottom right, #0ea5e9, #f97316, #ef4444)"
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          
          <div className="container mx-auto px-6 relative z-30 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 
                variants={fadeInUp}
                className="font-display text-4xl md:text-6xl font-bold text-white mb-8"
              >
                Ready to Be Part of Our Story?
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-white/90 max-w-3xl mx-auto mb-12"
              >
                Join us in our mission to transform Africa's tech landscape. 
                Whether you're a student, partner, or team member, there's a place for you here.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-brand-600 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
                >
                  Join Our Team
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                >
                  Partner With Us
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default About;