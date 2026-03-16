import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Magnetic } from '@/src/components/Magnetic';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_qaq4lr9',    // 🔁 Replace with your EmailJS Service ID
        '5t5uw3a',   // 🔁 Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'lAYiFVuMsvOAInZcb'     // 🔁 Replace with your EmailJS Public Key
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

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
            GET IN<br />TOUCH
          </motion.h1>
        </div>
      </section>

      <section className="px-10 grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
        <div>
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-30 block mb-10">Contact Info</span>
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase opacity-30 mb-4">Email</h3>
              <a href="mailto:neothekreator@gmail.com" className="text-4xl font-bold tracking-tighter uppercase hover:opacity-50 transition-opacity">
                neothekreator@gmail.com
              </a>
            </div>
            
            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase opacity-30 mb-4">Socials</h3>
              <div className="flex flex-col gap-4">
                <a href="https://www.instagram.com/neo_thekreator/" className="text-2xl font-bold tracking-tighter uppercase hover:opacity-50 transition-opacity">Instagram</a>
                <a href="https://github.com/NeoM84" className="text-2xl font-bold tracking-tighter uppercase hover:opacity-50 transition-opacity">GitHub</a>
                <a href="https://www.linkedin.com/in/neo-matsio-74b47942/" className="text-2xl font-bold tracking-tighter uppercase hover:opacity-50 transition-opacity">LinkedIn</a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase opacity-30 mb-4">Location</h3>
              <p className="text-2xl font-bold tracking-tighter uppercase">
                Johannesburg, South Africa<br />Available Remote
              </p>
            </div>
          </div>
        </div>

        <div>
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-30 block mb-10">Send a Message</span>
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 border-b border-black/10 pb-4">
              <label className="text-[10px] font-medium tracking-widest uppercase opacity-30">Name</label>
              <input 
                type="text" 
                required
                placeholder="Your Name"
                className="bg-transparent text-2xl font-bold tracking-tighter uppercase outline-none placeholder:opacity-10"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="flex flex-col gap-2 border-b border-black/10 pb-4">
              <label className="text-[10px] font-medium tracking-widest uppercase opacity-30">Email</label>
              <input 
                type="email" 
                required
                placeholder="your@email.com"
                className="bg-transparent text-2xl font-bold tracking-tighter uppercase outline-none placeholder:opacity-10"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="flex flex-col gap-2 border-b border-black/10 pb-4">
              <label className="text-[10px] font-medium tracking-widest uppercase opacity-30">Subject</label>
              <input 
                type="text" 
                placeholder="Project Inquiry"
                className="bg-transparent text-2xl font-bold tracking-tighter uppercase outline-none placeholder:opacity-10"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div className="flex flex-col gap-2 border-b border-black/10 pb-4">
              <label className="text-[10px] font-medium tracking-widest uppercase opacity-30">Message</label>
              <textarea 
                required
                rows={4}
                placeholder="Tell us about your project"
                className="bg-transparent text-2xl font-bold tracking-tighter uppercase outline-none placeholder:opacity-10 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <p className="text-xs font-medium tracking-widest uppercase text-green-600">
                ✓ Message sent! I'll get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-xs font-medium tracking-widest uppercase text-red-500">
                ✗ Something went wrong. Please try again.
              </p>
            )}

            <div className="pt-10">
              <Magnetic strength={0.2}>
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-12 py-6 bg-black text-background text-xs font-bold tracking-widest uppercase hover:bg-zinc-900 transition-colors w-full md:w-auto disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 
                   status === 'success' ? 'Message Sent ✓' : 
                   'Send Message'}
                </button>
              </Magnetic>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
