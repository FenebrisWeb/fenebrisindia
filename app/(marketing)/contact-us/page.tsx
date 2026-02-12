"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="h-1 w-12 bg-[#800020] mb-6" />
              <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter leading-tight">
                Let's Start a <br />
                <span className="font-normal italic">Conversation</span>
              </h1>
              
              <div className="mt-16 space-y-10">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Our Office</h4>
                  <p className="text-lg font-light">Noida, Uttar Pradesh, India</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Direct Contact</h4>
                  <p className="text-lg font-light">info@fenebris.com</p>
                  <p className="text-lg font-light">+91 (000) 000-0000</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="bg-zinc-50 dark:bg-zinc-900/30 p-8 md:p-12 border border-border-brand"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="NAME" className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 outline-none focus:border-[#800020] transition-colors text-sm" />
                  <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 outline-none focus:border-[#800020] transition-colors text-sm" />
                </div>
                <input type="text" placeholder="SUBJECT" className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 outline-none focus:border-[#800020] transition-colors text-sm" />
                <textarea rows={4} placeholder="MESSAGE" className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 outline-none focus:border-[#800020] transition-colors text-sm resize-none" />
                <button className="mt-8 bg-[#800020] text-white px-12 py-4 text-xs tracking-widest font-semibold hover:bg-black transition-all">
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}