import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Shield, HeartHandshake } from 'lucide-react';

const impacts = [
  {
    icon: Globe,
    title: "Global Standard",
    desc: "Our curriculum matches global industry demands, ensuring talent competes worldwide."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    desc: "We train and deploy talents into active roles within weeks, not months."
  },
  {
    icon: Shield,
    title: "Continuous Support",
    desc: "Post-training mentorship and career guidance ensure long-term success."
  },
  {
    icon: HeartHandshake,
    title: "Community Driven",
    desc: "Building a strong network of alumni and professionals fostering mutual growth."
  }
];

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold text-neutral-900 dark:text-white mb-4">Why Choose RespecTech?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
            We are redefining the tech ecosystem in Africa through sustainable practices and result-oriented methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-100 dark:border-neutral-800 hover:border-brand-500/30 transition-colors"
            >
              <div className="mb-4 text-brand-600">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;