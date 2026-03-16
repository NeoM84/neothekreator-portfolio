import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-background"
        >
          <div className="relative w-full max-w-md px-10">
            <div className="flex items-end justify-between mb-4">
              <span className="text-xs font-medium tracking-widest uppercase opacity-50">Loading Experience</span>
              <span className="text-6xl font-bold tracking-tighter tabular-nums">
                {Math.min(progress, 100)}%
              </span>
            </div>
            <div className="h-1px w-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                className="h-full bg-white"
              />
            </div>
          </div>
          
          <div className="absolute bottom-10 left-10">
            <span className="text-xs font-medium tracking-widest uppercase opacity-50">NeoTheKreator © 2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
