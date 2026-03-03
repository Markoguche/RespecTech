import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, Instagram, Github, Mail, MapPin, Phone, ArrowUp, Send, Sparkles, Zap, Shield } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  const isInView = useInView(footerRef, { once: false, amount: 0.1 });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const socialIcons = [
    
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
    
  ];

  const services = [
    { name: 'Product Design', icon: Sparkles },
    { name: 'Talent Recruitment', icon: Shield },
    { name: 'Tech Training', icon: Zap },
    { name: 'Startup Incubation', icon: Send }
  ];

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-neutral-900 text-white">
      {/* Animated Background Image */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('assets/footer.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY
        }}
      />
      
      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-brand-900/50"
        animate={{
          background: [
            "linear-gradient(to bottom right, #111111, #111111ee, #7c3aed50)",
            "linear-gradient(to bottom right, #111111ee, #1a1a1a, #7c3aed70)",
            "linear-gradient(to bottom right, #111111, #111111ee, #7c3aed50)"
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand-400 rounded-full"
          animate={{
            x: [Math.random() * 100, Math.random() * 100],
            y: [Math.random() * 100, Math.random() * 100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div 
              className="text-3xl font-display font-bold mb-6 relative"
              whileHover={{ scale: 1.05 }}
            >
              Respec<span className="text-brand-500">Tech</span>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-brand-500"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </motion.div>
            
            <motion.p 
              className="text-neutral-400 text-sm leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Empowering the next generation of tech leaders to solve Africa's most complex problems through innovation and opportunity.
            </motion.p>

            {/* Social Icons */}
            <motion.div 
              className="flex space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {socialIcons.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  className={`w-12 h-12 rounded-full bg-neutral-800/50 backdrop-blur-sm flex items-center justify-center text-neutral-400 ${social.color} transition-all border border-neutral-700/50`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 360,
                    boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-bold text-xl mb-8 flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              <Sparkles className="text-brand-500" size={20} />
              Services
            </motion.h4>
            <ul className="space-y-4">
              {services.map((service, idx) => (
                <motion.li 
                  key={idx}
                  className="group"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <motion.div 
                    className="flex items-center gap-3 text-neutral-400 hover:text-brand-500 cursor-pointer transition-all py-1"
                    whileHover={{ x: 10 }}
                  >
                    <service.icon size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service.name}</span>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-bold text-xl mb-8 flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              <Zap className="text-brand-500" size={20} />
              Quick Links
            </motion.h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', to: 'about' },
                { name: 'Our Impact', to: 'impact' },
                { name: 'Portfolio', to: 'companies' },
                { name: 'Contact', to: 'contact' }
              ].map((link, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link 
                    to={link.to} 
                    smooth={true} 
                    className="flex items-center gap-3 text-neutral-400 hover:text-brand-500 cursor-pointer transition-all py-1 group"
                    whileHover={{ x: 10 }}
                  >
                    <span className="w-0 group-hover:w-5 h-0.5 bg-brand-500 transition-all" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>


            {/* Contact Info */}
            <motion.div 
              className="mt-8 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="flex items-center gap-3 text-neutral-400 text-sm"
                whileHover={{ x: 5 }}
              >
                <MapPin size={16} className="text-brand-500" />
                <span>Plot 265, S.E Asebe Street, Mabushi Abuja.
                  <br />P.O. Box 5473, Richmond, CA 94805, USA</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-neutral-400 text-sm"
                whileHover={{ x: 5 }}
              >
                <Phone size={16} className="text-brand-500" />
                <span>+254 700 000 000</span>
              </motion.div>
            </motion.div>
          </motion.div>
        

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-neutral-800/50 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
            <motion.p 
              className="mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              &copy; 2026 RespecTech. All rights reserved.
            </motion.p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service'].map((item, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="hover:text-brand-500 transition-all relative group"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-brand-500 w-0"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {scrollYProgress.get() > 0.1 && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ y: -5, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 w-12 h-12 bg-brand-600 text-white rounded-full shadow-lg shadow-brand-600/50 flex items-center justify-center z-50"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer;