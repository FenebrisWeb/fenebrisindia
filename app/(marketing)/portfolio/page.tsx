"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="h-1 w-12 bg-[#800020] mb-6" />
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter">
              Selected <span className="font-normal italic">Works</span>
            </h1>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <Image 
                    src={`/hero/banner${i % 2 === 0 ? '1' : '2'}.webP`} 
                    alt="Project" 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="mt-6 flex justify-between items-end border-b border-border-brand pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#800020] font-semibold">Development</span>
                    <h3 className="text-2xl font-light tracking-tighter mt-1">Project Delta Architecture</h3>
                  </div>
                  <span className="text-sm font-mono text-zinc-400">/ 2024</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}