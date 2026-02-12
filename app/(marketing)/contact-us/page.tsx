"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight, Linkedin, Instagram, Twitter } from "lucide-react";

export default function ContactPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Animation Variants
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen py-32 bg-background text-foreground relative overflow-hidden">
      <div className="mx-auto max-w-[1650px] px-6 lg:px-12">
        
        {/* Modern One-Line Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-center mb-28 text-center"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.5em] text-[#800020] uppercase mb-2">Initiate Contact</span>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter uppercase inline-flex items-center gap-x-4">
                Connect <span className="font-normal italic text-[#800020] dark:text-[#a30029]">With Us</span>
            </h2>
          </div>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[1px] bg-[#800020] mt-8 opacity-40" 
          />
        </motion.div>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Information Section */}
          <div className="lg:col-span-5 space-y-16">
            <motion.div 
              variants={fadeUp} 
              initial="initial" 
              animate={isInView ? "animate" : ""}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-8 leading-[1.1]">
                Let's architect your <br />
                <span className="italic font-normal text-[#800020]">next standard.</span>
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md text-lg">
                Reach out for architectural stewardship, enterprise scalability, or to simply discuss a vision.
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              variants={fadeUp} 
              initial="initial" 
              animate={isInView ? "animate" : ""}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-10"
            >
              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-[#800020]/40 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#800020]/5">
                  <Mail size={20} className="text-[#800020]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-2 font-bold">Email</p>
                  <p className="text-xl font-medium tracking-tight hover:text-[#800020] transition-colors cursor-pointer">hello@fenebris.in</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-[#800020]/40 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#800020]/5">
                  <MapPin size={20} className="text-[#800020]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-2 font-bold">Location</p>
                  <p className="text-xl font-medium tracking-tight">New Delhi, India</p>
                </div>
              </div>
            </motion.div>

            {/* Social Linkage */}
            <motion.div 
              variants={fadeUp} 
              initial="initial" 
              animate={isInView ? "animate" : ""}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="pt-12 border-t border-zinc-100 dark:border-zinc-800 flex gap-10"
            >
              {[
                { name: 'LinkedIn', icon: Linkedin },
                { name: 'Instagram', icon: Instagram },
                { name: 'X', icon: Twitter }
              ].map((social) => (
                <a key={social.name} href="#" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-[#800020] transition-all duration-300">
                  <social.icon size={14} strokeWidth={2.5} />
                  {social.name}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white dark:bg-zinc-900/40 p-8 md:p-16 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
            {/* Subtle Inner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#800020]/5 blur-[100px] -mr-32 -mt-32 pointer-events-none" />

            <form className="space-y-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 px-1 focus:outline-none focus:border-[#800020] transition-all duration-500 font-light text-lg placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 px-1 focus:outline-none focus:border-[#800020] transition-all duration-500 font-light text-lg placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 ml-1">Subject of Inquiry</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 px-1 focus:outline-none focus:border-[#800020] transition-all duration-500 font-light text-lg appearance-none cursor-pointer">
                    <option className="bg-background">Architecture & Strategy</option>
                    <option className="bg-background">Enterprise Scalability</option>
                    <option className="bg-background">High-End Design</option>
                    <option className="bg-background">General Partnership</option>
                  </select>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                    <ArrowUpRight size={16} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Describe your vision or inquiry..."
                  className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 px-1 focus:outline-none focus:border-[#800020] transition-all duration-500 font-light text-lg resize-none placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
                />
              </div>

              <motion.button 
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-14 py-6 bg-[#800020] text-white rounded-full flex items-center justify-center gap-4 group transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(128,0,32,0.4)]"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Transmit Inquiry</span>
                <div className="relative overflow-hidden w-5 h-5">
                   <ArrowUpRight size={20} className="absolute inset-0 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500" />
                   <ArrowUpRight size={20} className="absolute inset-0 -translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 delay-75" />
                </div>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Modern Architectural Grid Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #800020 1px, transparent 1px), linear-gradient(to bottom, #800020 1px, transparent 1px)`,
            backgroundSize: '120px 120px' 
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
    </section>
  );
}