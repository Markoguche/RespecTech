import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AnimatedHeroText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create timeline for sequential animations
    const tl = gsap.timeline({
      delay: 0.5, // Small delay after splash screen
      defaults: {
        duration: 1.2,
        ease: "power3.out"
      }
    });

    // Set initial states
    gsap.set([line1Ref.current, line2Ref.current, paragraphRef.current, buttonsRef.current], {
      y: -60,
      opacity: 0,
      skewY: 3,
      filter: "blur(10px)"
    });

    // Animate first line
    tl.to(line1Ref.current, {
      y: 0,
      opacity: 1,
      skewY: 0,
      filter: "blur(0px)",
      duration: 1
    })
    // Animate second line (gradient text)
    .to(line2Ref.current, {
      y: 0,
      opacity: 1,
      skewY: 0,
      filter: "blur(0px)",
      duration: 1
    }, "-=0.6")
    // Animate paragraph
    .to(paragraphRef.current, {
      y: 0,
      opacity: 1,
      skewY: 0,
      filter: "blur(0px)",
      duration: 0.9
    }, "-=0.5")
    // Animate buttons
    .to(buttonsRef.current, {
      y: 0,
      opacity: 1,
      skewY: 0,
      filter: "blur(0px)",
      duration: 0.8
    }, "-=0.4");

    // Add character-by-character animation for more dynamic effect
    if (line1Ref.current && line2Ref.current) {
      const chars1 = line1Ref.current.textContent?.split('') || [];
      const chars2 = line2Ref.current.textContent?.split('') || [];
      
      // Clear and rebuild with spans
      line1Ref.current.innerHTML = chars1.map(char => 
        `<span class="inline-block">${char === ' ' ? '\u00A0' : char}</span>`
      ).join('');
      
      line2Ref.current.innerHTML = chars2.map(char => 
        `<span class="inline-block">${char === ' ' ? '\u00A0' : char}</span>`
      ).join('');

      // Animate characters
      gsap.fromTo(line1Ref.current.querySelectorAll('span'), 
        {
          y: -30,
          opacity: 0,
          rotation: 5
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.02,
          delay: 0.5,
          ease: "power2.out"
        }
      );

      gsap.fromTo(line2Ref.current.querySelectorAll('span'), 
        {
          y: -30,
          opacity: 0,
          rotation: -5
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.02,
          delay: 0.8,
          ease: "power2.out"
        }
      );
    }

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* First line */}
        <h1 
          ref={line1Ref}
          className="font-display text-5xl md:text-7xl font-bold leading-tight text-neutral-900 dark:text-white mb-4"
        >
          Connecting Tech Talents to
        </h1>
        
        {/* Second line with gradient */}
        <h1 
          ref={line2Ref}
          className="font-display text-5xl md:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-500 mb-8"
        >
          Global & Local Opportunities
        </h1>
        
        {/* Paragraph */}
        <p 
          ref={paragraphRef}
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          We empower the next generation of African innovators by bridging the gap between raw talent and global market demands.
        </p>
        
        {/* Buttons */}
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            to="/services" 
            className="px-8 py-4 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30 transition-all flex items-center justify-center group"
          >
            Explore Programs 
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-4 border border-neutral-300 dark:border-neutral-700 rounded-full font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeroText;