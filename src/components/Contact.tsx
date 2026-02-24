import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram } from 'lucide-react';
import SEO from '../components/SEO';   
  

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', org: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Thank you for reaching out! We will get back to you shortly.');
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/respectech-hr/",
      icon: <Linkedin size={20} />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/respectechhr__?igsh=MXA2d2xmMTBraXJ4YQ==",
      icon: <Instagram size={20} />
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-neutral-950 relative">
      <SEO 
        title="Contact Us" 
        description="Get in touch with RespecTech. Visit us at Plot 265, S.E Asebe Street, Mabushi Abuja or email Respectechhr@gmail.com."
      />
    
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-4xl font-bold text-neutral-900 dark:text-white mb-6">Let's Innovate Together</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-10">
              Whether you're looking to hire top-tier talent or train your team, we are here to facilitate your growth.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-brand-600 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white">Email Us</h4>
                  <p className="text-neutral-500">Respectechhr@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-brand-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white">Call Us</h4>
                  <p className="text-neutral-500">+234 809 130 2232,
                    <br />+234 802 635 7528</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-brand-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white">Visit Us</h4>
                  <p className="text-neutral-500">Plot 265, S.E Asebe Street, Mabushi Abuja.
                    <br />P.O. Box 5473, Richmond, CA 94805, USA</p>
                </div>
              </div>

              {/* SOCIAL MEDIA LINKS SECTION */}
              <div className="pt-4">
                <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${social.name}`}
                      className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all text-neutral-900 dark:text-white"
                    placeholder="Jane Doe"
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all text-neutral-900 dark:text-white"
                    placeholder="jane@company.com"
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Organization</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all text-neutral-900 dark:text-white"
                  placeholder="Company Inc."
                  onChange={(e) => setFormState({...formState, org: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all text-neutral-900 dark:text-white resize-none"
                  placeholder="How can we help you?"
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-lg hover:bg-brand-600 dark:hover:bg-brand-600 dark:hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;




  