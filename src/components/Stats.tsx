import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from 'use-count-up'; // Assuming you might install this, or implement manually below

// Manual hook for counting to avoid extra dependency
const useCountUpManual = (end: number, duration: number = 2, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
      else setCount(end);
    };
    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return count;
};

const StatItem: React.FC<{ value: number; suffix?: string; label: string; delay: number; inView: boolean }> = ({ value, suffix, label, delay, inView }) => {
  const count = useCountUpManual(value, 2.5, inView);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-brand-100 font-medium uppercase tracking-wider text-sm">{label}</div>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: 6000, suffix: '+', label: 'Talents in pool' },
    { value: 500, suffix: '+', label: 'Graduated talents' },
    { value: 200, suffix: '+', label: 'Training sessions' },
    { value: 5, suffix: '+', label: 'Startups built' },
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatItem 
              key={idx} 
              value={stat.value} 
              suffix={stat.suffix} 
              label={stat.label} 
              delay={idx * 0.1} 
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;