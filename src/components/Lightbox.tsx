import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LightboxProps {
  image: string | null;
  onClose: () => void;
}

export const Lightbox = ({ image, onClose }: LightboxProps) => {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-200 flex items-center justify-center bg-black/95 p-10 md:p-20"
          onClick={onClose}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-10 right-10 p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            onClick={onClose}
          >
            <X size={24} />
          </motion.button>

          <motion.img
            layoutId={image}
            src={image}
            alt="Lightbox"
            referrerPolicy="no-referrer"
            className="max-w-full max-h-full object-contain shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
