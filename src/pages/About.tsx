import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="pt-40 pb-20">
      <section className="px-10 mb-40">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-[15vw] font-extrabold tracking-tighter leading-[0.85] uppercase"
          >
            About Neo
          </motion.h1>
        </div>
      </section>

      <section className="px-10 grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
        <div className="aspect-4/5 bg-zinc-900 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            src="/NeoTheKreator Portfolio.jpg" 
            alt="NeoTheKreator" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale"S
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-30 block mb-10">My Vision</span>
          <h2 className="text-5xl font-bold tracking-tighter uppercase mb-10 leading-tight">
            To design and build digital brands and experiences that are clear, functional, and visually strong. I aim to create work that helps businesses communicate better, grow confidently, and connect with their users through thoughtful design and clean frontend development..
          </h2>
          <p className="text-xl opacity-60 leading-relaxed mb-8">
            Im Neo Matsio, a designer and frontend developer who creates structured, user-focused brands and digital experiences for small businesses and entrepreneurs. I specialise in building clear visual identities and responsive websites that balance strong design with practical functionality.
            My work sits at the intersection of branding, UX/UI, and frontend development. I translate ideas and business goals into simple, usable, and visually cohesive digital products. I care about how things look, how they work, and how users experience them across devices.
            From concept to launch, I work independently with clients to ensure every project is aligned with both user needs and business objectives. 
          </p>
          <p className="text-xl opacity-60 leading-relaxed">
            I design and build digital experiences that combine strong visual design with clean, responsive frontend development..
          </p>
        </div>
      </section>

      <section className="px-10 border-t border-black/10 py-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <span className="text-[10px] font-medium tracking-widest uppercase opacity-30 block mb-10">Skills</span>
            <ul className="flex flex-col gap-4 text-2xl font-bold tracking-tighter uppercase">
              <li>Creative Direction</li>
              <li>UI/UX Design</li>
              <li>FrontEnd Developement</li>
              <li>Web Design</li>
              <li>Brand Identity</li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <span className="text-[10px] font-medium tracking-widest uppercase opacity-30 block mb-10">Experience</span>
            <div className="flex flex-col gap-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black/5 pb-8">
                <div>
                  <h3 className="text-3xl font-bold tracking-tighter uppercase">Founder & Lead Designer / Developer  </h3>
                  <p className="opacity-50 uppercase text-xs tracking-widest mt-2">Kuishi Creatives</p>
                </div>
                <span className="text-xs opacity-30 mt-4 md:mt-0">May 2014 — Present</span>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black/5 pb-8">
                <div>
                  <h3 className="text-3xl font-bold tracking-tighter uppercase">Events Coordinator  </h3>
                  <p className="opacity-50 uppercase text-xs tracking-widest mt-2">Ntsio Entertainment</p>
                </div>
                <span className="text-xs opacity-30 mt-4 md:mt-0">April 2010 — January 2013</span>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black/5 pb-8">
                <div>
                  <h3 className="text-3xl font-bold tracking-tighter uppercase">Personal Loan Consultant  </h3>
                  <p className="opacity-50 uppercase text-xs tracking-widest mt-2">Nedbank Ltd</p>
                </div>
                <span className="text-xs opacity-30 mt-4 md:mt-0">March 2008 — January 2009</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 py-40 text-center border-t border-black/10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[8vw] font-bold tracking-tighter uppercase leading-none mb-10"
        >
          Let's create<br />the future
        </motion.h2>
        <button className="px-12 py-6 bg-black text-background text-xs font-bold tracking-widest uppercase hover:bg-zinc-900 transition-colors">
          View Projects
        </button>
      </section>
    </div>
  );
};
