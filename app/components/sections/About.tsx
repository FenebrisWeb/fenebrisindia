"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function About() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section - Replicating the Industries.tsx Header Layout */}
      <section className="pt-10 pb-10 md:pt-32">
        <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl"
            >
              <div className="h-1 w-12 bg-[#800020] mb-6" /> 
              <h1 className="text-2xl md:text-5xl font-extralight tracking-tighter leading-tight">
                Architecting <br />
                <span className="font-normal italic">Digital Excellence</span>
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-xs text-sm tracking-widest text-black-500 uppercase leading-relaxed"
            >
              Fenebris India Pvt Ltd is a premier technology firm dedicated to precision engineering and innovative design.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Visual Section */}
      <section className="py-10">
        <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-12">
          <motion.div 
            {...fadeInUp}
            className="relative h-[400px] md:h-[600px] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900"
          >
            <Image 
              src="/hero/banner1.webP" 
              alt="Architecture of Fenebris" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story / Who We Are */}
      <section className="py-10 mb-20">
        <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div {...fadeInUp} className="lg:col-span-4">
              <h2 className="text-3xl font-extralight tracking-tighter uppercase">
                Our <span className="font-normal italic">Identity</span>
              </h2>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <p className="text-lg text-black-500 leading-relaxed font-light">
                  Rooted in the principles of precision and innovation, we bridge the gap between complex technical challenges and elegant, business-centric solutions. Our journey is defined by a commitment to quality that transcends standard development.
                </p>
                <p className="text-lg text-black-500 leading-relaxed font-light">
                  We believe that every digital product is an architectural feat. From E-Commerce ecosystems to Fintech security, we build with a focus on endurance, scalability, and aesthetic refinement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}