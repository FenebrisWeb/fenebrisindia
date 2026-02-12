"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Building2, HeartPulse, GraduationCap, Landmark, Truck, BarChart3 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Industries() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-12">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <div className="h-1 w-12 bg-[#800020] mb-6" />
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter leading-tight">
              Sectors We <br />
              <span className="font-normal italic">Transform</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-zinc-500">
              Tailored digital solutions designed to meet the unique demands of global industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20 border-t border-border-brand">
        <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-brand border border-border-brand">
            {industryDetails.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background p-12 group hover:bg-[#800020]/5 transition-colors"
              >
                <item.icon className="w-8 h-8 mb-8 text-zinc-400 group-hover:text-[#800020] transition-colors" />
                <h3 className="text-2xl font-light uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const industryDetails = [
  { title: "E-Commerce", icon: ShoppingBag, desc: "Scalable platforms for the modern retail era." },
  { title: "Real Estate", icon: Building2, desc: "Property management and immersive viewing solutions." },
  { title: "Healthcare", icon: HeartPulse, desc: "Patient-centric systems and health data management." },
  { title: "Education", icon: GraduationCap, desc: "Learning management systems for the digital classroom." },
  { title: "Fintech", icon: Landmark, desc: "Secure financial tools and transaction architectures." },
  { title: "Logistics", icon: Truck, desc: "Supply chain visibility and fleet management tech." },
];