import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Project } from '@/src/data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
      className="group relative w-full aspect-3/4 overflow-hidden border-b border-black/10 md:border-r md:odd:border-r-0"
    >
      <Link 
        to={`/project/${project.slug}`}
        className="block w-full h-full"
        data-cursor="VIEW"
      >
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
        />
        
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between pointer-events-none">
          <div>
            <span className="text-[10px] font-medium tracking-widest uppercase opacity-50 block mb-2">
              {project.category}
            </span>
            <h3 className="text-4xl font-bold tracking-tighter uppercase leading-none">
              {project.title}
            </h3>
          </div>
          <span className="text-xs font-medium opacity-50">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};
