import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '@/src/data';
import { ArrowLeft } from 'lucide-react';
import { Lightbox } from '@/src/components/Lightbox';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold uppercase tracking-tighter">Project Not Found</h1>
      </div>
    );
  }

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <div className="pt-40">
      <section className="px-10 mb-20">
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-xs font-medium tracking-widest uppercase opacity-50 hover:opacity-100 transition-all mb-10"
        >
          <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-background transition-colors">
            <ArrowLeft size={14} />
          </div>
          <span>Back to Work</span>
        </button>

        <div className="flex flex-col md:flex-row items-end justify-between gap-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-[10vw] font-extrabold tracking-tighter leading-none uppercase"
          >
            {project.title}
          </motion.h1>
          
          <div className="flex flex-col items-end text-right pb-4">
            <span className="text-[10px] font-medium tracking-widest uppercase opacity-30 mb-2">Year</span>
            <span className="text-xs uppercase tracking-widest">{project.year}</span>
          </div>
        </div>
      </section>

      <section className="px-10 mb-40 grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="md:col-span-1">
          <div className="sticky top-40">
            <span className="text-[10px] font-medium tracking-widest uppercase opacity-30 block mb-6">Description</span>
            <p className="text-lg opacity-60 leading-relaxed">
              {project.description}
            </p>
            
            <div className="mt-12">
              <span className="text-[10px] font-medium tracking-widest uppercase opacity-30 block mb-4">Services</span>
              <div className="flex flex-wrap gap-2">
                {project.category.split('/').map((cat) => (
                  <span key={cat} className="px-3 py-1 border border-black/10 text-[10px] uppercase tracking-widest">
                    {cat.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-10">
          {project.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="w-full aspect-video bg-zinc-900 overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(img)}
              data-cursor="EXPAND"
            >
              <motion.img
                layoutId={img}
                src={img}
                alt={`${project.title} ${i}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-10 py-40 border-t border-black/10 text-center">
        <span className="text-[10px] font-medium tracking-widest uppercase opacity-30 block mb-10">Next Project</span>
        <Link 
          to={`/project/${nextProject.slug}`}
          className="group inline-block"
          data-cursor="NEXT"
        >
          <h2 className="text-[8vw] font-bold tracking-tighter uppercase leading-none group-hover:opacity-50 transition-opacity">
            {nextProject.title}
          </h2>
        </Link>
      </section>

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};
