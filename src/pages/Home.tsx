import React from 'react';
import { motion } from 'motion/react';
import { projects } from '@/src/data';
import { ProjectCard } from '@/src/components/ProjectCard';
import { DevWorkSlider } from '@/src/components/DevWorkSlider';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="pt-28 md:pt-40">
      <section className="px-4 md:px-10 mb-20 md:mb-40">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
            className="text-[18vw] md:text-[15vw] font-extrabold tracking-tighter leading-[0.85] uppercase"
          >
            NEO THE<br />KREATOR
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between mt-10 md:mt-20 gap-6 md:gap-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="max-w-xl text-base md:text-lg opacity-60 leading-relaxed"
          >
            I'm a designer and frontend developer focused on building modern brands and interactive web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="flex flex-col md:items-end md:text-right"
          >
            <span className="text-[10px] font-medium tracking-widest uppercase opacity-30 mb-2">Based in</span>
            <span className="text-xs uppercase tracking-widest">Johannesburg / Remote</span>
          </motion.div>
        </div>
      </section>

      {/* Brand / Design Work Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-black/10">
        {projects.map((project, index) => (
          /* @ts-ignore */
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>

      {/* Dev Work Slider */}
      <DevWorkSlider />

      {/* CTA Section */}
      <section className="px-4 md:px-10 py-20 md:py-40 text-center border-t border-black/10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10vw] md:text-[8vw] font-bold tracking-tighter uppercase leading-none mb-10"
        >
          Available for<br />New Projects
        </motion.h2>
        <Link to="/contact">
          <button className="px-8 md:px-12 py-4 md:py-6 bg-black text-background text-xs font-bold tracking-widest uppercase hover:bg-zinc-900 transition-colors w-full md:w-auto">
            Get in Touch
          </button>
        </Link>
      </section>
    </div>
  );
};
