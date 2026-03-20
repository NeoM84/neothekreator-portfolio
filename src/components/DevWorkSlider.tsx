import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { Github, ArrowRight } from 'lucide-react';
import { DevWorks } from '@/src/data';
import { Magnetic } from './Magnetic';

export const DevWorkSlider = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (targetRef.current) {
      setContainerWidth(targetRef.current.offsetWidth);
      setScrollWidth(targetRef.current.scrollWidth);
    }
    
    const handleResize = () => {
      if (targetRef.current) {
        setContainerWidth(targetRef.current.offsetWidth);
        setScrollWidth(targetRef.current.scrollWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  return (
    <section className="py-24 md:py-40 border-t border-black/10 overflow-hidden">
      <div className="px-6 md:px-10 mb-12 md:mb-20 flex items-end justify-between">
        <div>
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-30 block mb-4">Dev Work & Vibe-Coding</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Dev Work</h2>
        </div>
        <div className="hidden md:flex gap-4">
           <span className="text-[10px] font-medium tracking-widest uppercase opacity-30">Drag to explore</span>
        </div>
      </div>

      <div className="relative cursor-grab active:cursor-grabbing">
        <motion.div
          ref={targetRef}
          drag="x"
          dragConstraints={{ left: -(scrollWidth - containerWidth), right: 0 }}
          style={{ x: springX }}
          className="flex gap-6 md:gap-10 px-6 md:px-10"
        >
          {DevWorks.map((work) => (
            <div 
              key={work.id} 
              className="flex-shrink: 0 w-300px md:w-450px"
            >
              <div className="aspect-4/3 bg-zinc-900 overflow-hidden mb-6 group relative">
                <img 
                  src={work.image} 
                  alt={work.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Magnetic strength={0.2}>
                      <a 
                        href={work.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
                      >
                        <Github size={24} />
                      </a>
                   </Magnetic>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tighter uppercase mb-1">{work.title}</h3>
                  <span className="text-[10px] font-medium tracking-widest uppercase opacity-50">{work.category}</span>
                </div>
                <a 
                  href={work.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors"
                >
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
