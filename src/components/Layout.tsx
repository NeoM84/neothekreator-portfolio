import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './CustomCursor';
import { Preloader } from './Preloader';
import { Navbar } from './Navbar';
import { useLocation, Link } from 'react-router-dom';


export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-ZA', {
        timeZone: 'Africa/Johannesburg',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setTime(timeString);
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000); 

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      
      <footer className="px-10 py-20 border-t border-black/10 flex flex-col md:flex-row items-start justify-between gap-10">
        <div className="max-w-md">
          <h4 className="text-4xl font-bold tracking-tighter uppercase mb-6">Let's Kreate Together.</h4>
          <a href="mailto:neothekreator@gmail.com" className="text-lg opacity-50 hover:opacity-100 transition-opacity underline underline-offset-8">
            neothekreator@gmail.com
          </a>
        </div>
        
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-30">Navigation</span>
          <div className="flex gap-8">
            <Link to="/" className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity">Work</Link>
            <Link to="/about" className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity">About</Link>
            <Link to="/contact" className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity">Contact</Link>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-30">Socials</span>
          <div className="flex gap-8">
            <a href="https://www.instagram.com/neo_thekreator/" className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity">Instagram</a>
            <a href="https://github.com/NeoM84" className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity">GitHub</a>
            <a href="https://www.linkedin.com/in/neo-matsio-74b47942/" className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity">LinkedIn</a>
          </div>
        </div>
        
        <div className="text-right">
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-30 block mb-2">Local Time</span>
          <span className="text-xs uppercase tracking-widest">Johannesburg, RSA — {time}</span>
        </div>
      </footer>
    </>
  );
};
