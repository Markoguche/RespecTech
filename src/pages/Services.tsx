import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Layout, 
  Users, 
  Rocket,
  Brain,
  Heart,
  Trophy,
  Zap,
  Briefcase,
  Plus,
  Minus,
  Award,
  BookOpen,
  Star,
  Target,
  Shield,
  Clock,
  Globe
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import ImageCarousel from '../components/ImageCarousel';
import { Link } from 'react-router-dom';
import { trainingPhotos, serviceOneImage, serviceTwoImage, serviceThreeImage } from '../utils/images';
import SEO from '../components/SEO';

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

// FAQ Data
const faqs = [
  {
    question: "What programs do you offer?",
    answer: "We offer comprehensive tech training programs including UI/UX Design, Software Development, Cyber Security, AI, Data Analytics, and Digital Marketing. Each program is designed with industry experts to ensure you learn the most in-demand skills.",
    icon: BookOpen
  },
  {
    question: "How long are the training programs?",
    answer: "Our programs typically range from 12 to 24 weeks, depending on the track. We offer both full-time and part-time options to accommodate different schedules. All programs include hands-on projects and real-world applications.",
    icon: Clock
  },
  {
    question: "What are the admission requirements?",
    answer: "Basic computer literacy and a passion for technology are required. Some programs may have prerequisites. We evaluate applicants based on motivation, aptitude, and commitment rather than just academic credentials.",
    icon: Target
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes! We have a 95% job placement rate. Our career services include resume building, interview preparation, portfolio development, and direct connections to our network of 200+ hiring partners across Africa and globally.",
    icon: Briefcase
  },
  {
    question: "Are the programs online or in-person?",
    answer: "We offer both online and in-person learning options. Our hybrid model allows you to choose what works best for your schedule. All online classes are live and interactive with instructor support.",
    icon: Globe
  },
  {
    question: "What certification will I receive?",
    answer: "Upon successful completion, you'll receive an industry-recognized certificate. Our certifications are valued by employers and include verified skill badges that you can display on your LinkedIn profile.",
    icon: Award
  },
  {
    question: "Do you offer payment plans or scholarships?",
    answer: "Yes, we offer flexible payment plans and merit-based scholarships. We believe financial constraints shouldn't limit access to quality education. Contact our admissions team to explore available options.",
    icon: Heart
  },
  {
    question: "What makes your programs unique?",
    answer: "Our programs combine cutting-edge curriculum with expert mentorship, real projects, and guaranteed career support. We focus on practical skills that employers actually need, not just theory. Our community-first approach ensures you're never learning alone.",
    icon: Star
  }
];

const Services: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

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

      {/* NEW SECTION 3: WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-br from-brand-50 to-orange-50 dark:from-neutral-900 dark:to-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600/5 to-orange-600/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Side - Image */}
            <motion.div 
              variants={fadeInUp}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Students learning"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="absolute -bottom-8 -right-8 bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-orange-500 rounded-full flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-600">500+</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">Success Stories</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Features Grid */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6 order-1 lg:order-2"
            >
              <motion.h2 
                variants={fadeInUp}
                className="font-display text-4xl md:text-5xl font-bold mb-8"
              >
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-500">Choose Us</span>
              </motion.h2>

              <div className="grid gap-6">
                {[
                  {
                    icon: Brain,
                    title: "Cutting-Edge Curriculum",
                    description: "Designed with industry experts to ensure you learn the most in-demand skills",
                    delay: 0.2
                  },
                  {
                    icon: Users,
                    title: "Expert Mentorship",
                    description: "Learn from seasoned professionals who've worked at top tech companies",
                    delay: 0.3
                  },
                  {
                    icon: Briefcase,
                    title: "Career Support",
                    description: "Comprehensive job placement assistance with our network of hiring partners",
                    delay: 0.4
                  },
                  {
                    icon: Zap,
                    title: "Hands-On Projects",
                    description: "Build real-world applications that showcase your skills to employers",
                    delay: 0.5
                  },
                  {
                    icon: Heart,
                    title: "Community First",
                    description: "Join a supportive network of peers, alumni, and industry professionals",
                    delay: 0.6
                  },
                  {
                    icon: Trophy,
                    title: "Proven Success",
                    description: "95% job placement rate and 4.9/5 student satisfaction score",
                    delay: 0.7
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: feature.delay, 
                      duration: 1.5, 
                      ease: "easeOut" 
                    }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex gap-4 p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.8 }}
                      className="w-12 h-12 bg-gradient-to-br from-brand-100 to-orange-100 dark:from-brand-900/30 dark:to-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-brand-600 group-hover:to-orange-500"
                    >
                      <feature.icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors duration-500" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION 4: FAQ ACCORDION */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Side - Image */}
            <motion.div 
              variants={fadeInUp}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="FAQ"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="absolute -top-8 -left-8 bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">24/7</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">Support Available</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - FAQ Accordion */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6 order-1 lg:order-2"
            >
              <motion.h2 
                variants={fadeInUp}
                className="font-display text-4xl md:text-5xl font-bold mb-8"
              >
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">Questions</span>
              </motion.h2>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: i * 0.1, 
                      duration: 1.5, 
                      ease: "easeOut" 
                    }}
                    className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    <motion.button
                      onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors duration-300"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          animate={{ rotate: activeFAQ === i ? 360 : 0 }}
                          transition={{ duration: 0.5 }}
                          className="w-10 h-10 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl flex items-center justify-center flex-shrink-0"
                        >
                          <faq.icon className="w-5 h-5 text-orange-600" />
                        </motion.div>
                        <h3 className="font-bold text-lg pr-4">{faq.question}</h3>
                      </div>
                      <motion.div
                        animate={{ rotate: activeFAQ === i ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        {activeFAQ === i ? (
                          <Minus className="w-4 h-4 text-brand-600" />
                        ) : (
                          <Plus className="w-4 h-4 text-brand-600" />
                        )}
                      </motion.div>
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeFAQ === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="mt-8 p-6 bg-gradient-to-r from-brand-600 to-orange-500 rounded-2xl text-white"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Still have questions?</h3>
                    <p className="text-white/90 text-sm">We're here to help! Contact our support team.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS & OTHER SECTIONS */}
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