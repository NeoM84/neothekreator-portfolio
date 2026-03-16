import React from 'react';
import { Link } from 'react-router-dom';
import { Magnetic } from './Magnetic';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-8">
      <Magnetic strength={0.2}>
        <Link to="/" className="text-lg font-bold tracking-tighter uppercase">
          NeoTheKreator
        </Link>
      </Magnetic>
      
      <div className="flex items-center gap-10">
        <Magnetic strength={0.3}>
          <Link to="/" className="text-xs font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity">
            Work
          </Link>
        </Magnetic>
        <Magnetic strength={0.3}>
          <Link to="/about" className="text-xs font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity">
            About
          </Link>
        </Magnetic>
        <Magnetic strength={0.3}>
          <Link to="/contact" className="text-xs font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity">
            Contact
          </Link>
        </Magnetic>
      </div>

    </nav>
  );
};
