import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Layers, Users, Rocket } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: "Product Design & Deployment",
    desc: "End-to-end development of scalable tech products, designed with modern UI/UX principles and deployed for global impact."
  },
  {
    icon: Users,
    title: "Talent Training & Recruitment",
    desc: "Comprehensive training programs (Physical, Remote, Hybrid) turning beginners into job-ready experts, plus top-tier recruitment."
  },
  {
    icon: Rocket,
    title: "Startup Accelerators",
    desc: "Incubating the next generation of African unicorns by providing mentorship, resources, and technical infrastructure."
  }
];

// Custom Hook for 3D Tilt
const useTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return { onMouseMove: onMove, onMouseLeave: onLeave, mouseX, mouseY };
};

const ServiceCard: React.FC<{ service: typeof services[0]; index: number }> = ({ service, index }) => {
  const { onMouseMove, onMouseLeave, mouseX, mouseY } = useTilt();
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      // onMouseLeave={onLeave}
      style={{ perspective: 1000 }}
      className="relative group h-full"
    >
      <motion.div
        style={{ rotateX: mouseX, rotateY: mouseY }}
        className="h-full bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-2xl hover:border-brand-500/50 transition-all duration-300"
      >
        <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center mb-6 text-brand-600 group-hover:scale-110 transition-transform">
          <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-brand-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {service.desc}
        </p>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-brand-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-neutral-900 dark:text-white mb-4">Our Core Services</h2>
          <div className="w-20 h-1 bg-brand-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;