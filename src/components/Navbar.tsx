import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Magnetic } from './Magnetic';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-10 py-6 md:py-8">
        <Magnetic strength={0.2}>
          <Link to="/" className="text-lg font-bold tracking-tighter uppercase">
            NeoTheKreator
          </Link>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Magnetic strength={0.3}>
                <Link
                  to={link.href}
                  className="text-xs font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.name}
                </Link>
              </Magnetic>
            </div>
          ))}
        </div>

        {/* Mobile Toggle — only visible on mobile */}
        <button
          className="md:hidden p-2 z-[51]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} color="white" /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[49] bg-black flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-bold tracking-tighter uppercase text-white hover:opacity-50 transition-opacity"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
