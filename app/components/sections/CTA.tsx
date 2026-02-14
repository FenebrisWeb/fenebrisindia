"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageSquare, Phone } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#800020' }}>
      {/* Decorative architectural grid overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Impactful Text */}
          <div className="max-w-2xl">
            <div className="h-1 w-12 bg-white/30 mb-8" />
            <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter text-white leading-[0.9]">
              Let’s Build <br />
              <span className="font-normal italic">Something</span> <br />
              <span className="font-medium">Exceptional</span>
            </h2>
            <p className="mt-8 text-xl text-white/70 font-extralight leading-relaxed max-w-lg">
              Unlock your business's full potential with precision-engineered digital 
              architecture. Your vision, our technical mastery.
            </p>
            
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="text-white/40 uppercase tracking-widest text-xs mb-2">Email Us</span>
                <Link href="#" className="text-white hover:text-white/70 transition-colors text-lg underline decoration-white/20 underline-offset-4">
                  hello@fenebris.com
                </Link>
              </div>
              <div className="flex flex-col">
                <span className="text-white/40 uppercase tracking-widest text-xs mb-2">Call Us</span>
                <Link href="#" className="text-white hover:text-white/70 transition-colors text-lg underline decoration-white/20 underline-offset-4">
                  +91 999 000 0000
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Amazing Interactive "Action Card" */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-white/10 blur-3xl rounded-full" />
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-[2rem] shadow-2xl overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-light text-white mb-2">Kickstart Your Growth</h3>
                <p className="text-white/60 mb-10">Average response time: &lt; 24 hours</p>
                
                <div className="space-y-4">
                  {/* Primary Link Button */}
                  <Link href="#" className="w-full group/btn flex items-center justify-between p-6 bg-white text-[#800020] rounded-xl font-bold tracking-widest uppercase text-sm transition-all duration-500 hover:bg-zinc-100">
                    Get a Free Audit
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Link>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Secondary WhatsApp Link */}
                    <Link href="#" className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-white gap-3">
                      <MessageSquare className="w-6 h-6" />
                      <span className="text-[10px] tracking-widest uppercase">WhatsApp</span>
                    </Link>
                    
                    {/* Secondary Consultation Link */}
                    <Link href="#" className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-white gap-3">
                      <Mail className="w-6 h-6" />
                      <span className="text-[10px] tracking-widest uppercase">Consultation</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative Brand Accent inside the card */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;