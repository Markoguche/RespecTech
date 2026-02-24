import React from 'react';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-6 border-t border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="text-2xl font-display font-bold mb-4">Respec<span className="text-brand-500">Tech</span></div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of tech leaders to solve Africa's most complex problems through innovation and opportunity.
            </p>
            <div className="flex space-x-4">
              {[
                // { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                // { icon: Github, href: '#' },
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-brand-600 hover:text-white transition-all">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="hover:text-brand-500 cursor-pointer transition-colors">Product Design</li>
              <li className="hover:text-brand-500 cursor-pointer transition-colors">Talent Recruitment</li>
              <li className="hover:text-brand-500 cursor-pointer transition-colors">Tech Training</li>
              <li className="hover:text-brand-500 cursor-pointer transition-colors">Startup Incubation</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><Link to="about" smooth={true} className="hover:text-brand-500 cursor-pointer transition-colors">About Us</Link></li>
              <li><Link to="impact" smooth={true} className="hover:text-brand-500 cursor-pointer transition-colors">Our Impact</Link></li>
              <li><Link to="companies" smooth={true} className="hover:text-brand-500 cursor-pointer transition-colors">Portfolio</Link></li>
              <li><Link to="contact" smooth={true} className="hover:text-brand-500 cursor-pointer transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter
          <div>
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-sm text-neutral-400 mb-4">Join our newsletter to get the latest updates on tech opportunities.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-lg outline-none focus:border-brand-500 transition-colors text-sm"
              />
              <button className="bg-brand-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-brand-700 transition-colors text-sm">
                Subscribe
              </button>
            </form>
            </div> */}
            </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
          <p>&copy; 2026 RespecTech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;