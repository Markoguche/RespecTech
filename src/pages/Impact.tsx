import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Zap, 
  Star,
  Target,
  GraduationCap,
  Calendar,
  Clock,
  Award,
  Rocket,
  Globe,
  MapPin,
  Quote
} from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import { 
  trainingPhotos, 
  conferencePhotos, 
  classPhotos, 
  mapImage 
} from '../utils/images';
import SEO from '../components/SEO';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const Impact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <SEO 
        title="Our Impact Across Africa" 
        description="Discover RespecTech's measurable impact across Africa. Over 6,000 talents trained, 1,100+ conference attendees, and countless success stories driving technological innovation."
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-purple-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-purple-900/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, currentColor 2px, transparent 2px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 mb-6"
            >
              Our Impact
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8"
            >
              Empowering 10,000+ talents across Africa with world-class tech education
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6"
            >
              {[
                { num: "10,000+", label: "Students Trained" },
                { num: "50+", label: "Countries Reached" },
                { num: "85%", label: "Employment Rate" },
                { num: "1,400+", label: "Conference Attendees" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg"
                >
                  <div className="text-3xl font-bold text-brand-600">{stat.num}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1. PROGRAMS SECTION */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Our Programs
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Comprehensive training programs designed to launch your tech career
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Intensive Training",
                description: "6-month deep-dive programs in AI, Data Analytics, and Software Development",
                icon: GraduationCap,
                stats: "500+ Graduates",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Zuri Accelerator",
                description: "Fast-track program for aspiring tech entrepreneurs and startup founders",
                icon: Rocket,
                stats: "100+ Startups",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Tech Conferences",
                description: "Annual conferences bringing together industry leaders and tech enthusiasts",
                icon: Trophy,
                stats: "1,400+ Attendees",
                color: "from-orange-500 to-red-500"
              }
            ].map((program, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{program.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-brand-600 uppercase tracking-wider">{program.stats}</span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      Learn More →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. COHORT 5 BATCH SECTION */}
      <section className="py-24 bg-gradient-to-br from-brand-50 via-white to-purple-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-purple-900/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-100 to-purple-100 dark:from-brand-900/30 dark:to-purple-900/30 rounded-full backdrop-blur-sm">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Target className="w-6 h-6 text-brand-600" />
                  </motion.div>
                  <span className="text-brand-600 dark:text-brand-400 font-bold text-lg">Current Batch</span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2 
                variants={fadeInUp}
                className="font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
              >
                Meet Cohort 5
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">
                  The Future Innovators
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p variants={fadeInUp} className="text-xl text-neutral-600 dark:text-neutral-400">
                Our current batch of 150 talented students embarking on a transformative 6-month journey in AI & Data Analytics.
              </motion.p>

              {/* Key Features */}
              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  { icon: Calendar, text: "6-Month Intensive Program", color: "text-blue-600" },
                  { icon: Users, text: "150+ Students Enrolled", color: "text-purple-600" },
                  { icon: Award, text: "Industry-Certified Curriculum", color: "text-green-600" },
                  { icon: Star, text: "1-on-1 Mentorship", color: "text-orange-600" }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center ${feature.color}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium text-neutral-700 dark:text-neutral-300">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={fadeInUp}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-500"
                >
                  Meet Cohort 5
                  <Rocket className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Class Photos Carousel */}
            <motion.div 
              variants={fadeInUp}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-600 to-purple-600 rounded-3xl opacity-20 blur-2xl animate-pulse" />
              
              <div className="relative bg-white dark:bg-neutral-900 p-6 rounded-3xl shadow-2xl">
                <ImageCarousel 
                  images={classPhotos} 
                  title="Cohort 5 in Action"
                  autoPlay={true}
                  showDots={true}
                  className="rounded-2xl overflow-hidden"
                />
                
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-brand-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-xl"
                >
                  <span className="font-bold text-sm">LIVE NOW</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CONFERENCE SECTION */}
      <section className="py-24 bg-white dark:bg-neutral-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-full backdrop-blur-sm mb-8">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Trophy className="w-6 h-6 text-orange-600" />
                </motion.div>
                <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">Annual Conference</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              RespecTech Conference 2024
            </motion.h2>

            {/* Description */}
            <motion.p variants={fadeInUp} className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Our flagship conference bringing together 1,400+ tech enthusiasts, industry leaders, and innovators from across the continent.
            </motion.p>
          </motion.div>

          {/* Conference Carousel */}
          <motion.div 
            variants={fadeInUp}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative group">
              {/* Animated Border */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-1000"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-2xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-500/20 to-transparent rounded-full blur-2xl" />
                
                <ImageCarousel 
                  images={conferencePhotos}
                  title="RespecTech Conference 2024"
                  autoPlay={true}
                  showDots={true}
                  className="rounded-2xl overflow-hidden"
                  imageClassName="w-full h-[500px] object-cover"
                />
                
                {/* Stats Overlay */}
                <div className="mt-8 grid grid-cols-3 gap-6">
                  {[
                    { num: "1,100+", label: "Physical Attendees", icon: Users },
                    { num: "300+", label: "Virtual Participants", icon: Zap },
                    { num: "50+", label: "Expert Speakers", icon: Star }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-neutral-900 dark:text-white">{stat.num}</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. SUCCESS STORIES */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Success Stories
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-neutral-600 dark:text-neutral-400">
              Real transformations from our programs
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { name: "Amina S.", role: "Data Analyst", text: "The intensive training gave me the hands-on experience needed to switch careers.", icon: "🎯" },
              { name: "Chukwuemeka O.", role: "Startup Founder", text: "Through the Zuri accelerator, we secured our first round of funding.", icon: "🚀" },
              { name: "Fatima D.", role: "Frontend Dev", text: "The mentorship I received was invaluable for my career growth.", icon: "⭐" }
            ].map((story, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{story.icon}</div>
                  <Quote className="text-brand-200 absolute top-6 right-6 w-8 h-8" />
                  <p className="text-neutral-600 dark:text-neutral-300 italic mb-6 relative z-10">"{story.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {story.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900 dark:text-white">{story.name}</div>
                      <div className="text-xs text-brand-600 uppercase tracking-wider">{story.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TRAINING SECTION */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Training in Action
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              A glimpse into our intensive AI & Data Analytics bootcamps where theory meets practice.
            </motion.p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ImageCarousel images={trainingPhotos} title="AI & Data Analytics Training" autoPlay={true} />
          </motion.div>
        </div>
      </section>

      {/* 6. GEOGRAPHIC REACH */}
      <section className="py-24 overflow-hidden bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <img src={mapImage} alt="Africa Map" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-transparent flex items-end justify-center">
                <div className="text-white text-center p-8">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                  </motion.div>
                  <p className="font-bold text-2xl">Pan-African Reach</p>
                  <p className="text-white/80 mt-2">Operating in 15+ Countries</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="font-display text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Bridging Borders, Building Futures
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                We operate remotely and physically across key hubs. Our remote-first approach ensures that talent from any region can access global opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "15+", label: "Countries", icon: Globe },
                  { num: "50+", label: "Cities", icon: MapPin },
                  { num: "100+", label: "Partners", icon: Users },
                  { num: "24/7", label: "Support", icon: Clock }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl text-center"
                  >
                    <div className="text-2xl font-bold text-brand-600">{item.num}</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. FUTURE VISION */}
      <section className="py-32 bg-gradient-to-br from-neutral-900 via-brand-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            The Future is Tech.
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400"
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
              The Future is Africa.
            </motion.span>
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-900 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-500"
            >
              Join Our Mission
              <Rocket className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Impact;