"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Layout, 
  Code2, 
  Database, 
  Settings, 
  ShoppingCart,
  Globe,
  Store,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    title: "UI/UX Architecture",
    description: "Creating minimalist, high-conversion interfaces with a focus on user flow and brand identity.",
    icon: Layout,
    color: "#800020", // Burgundy
    lightBg: "bg-rose-50",
    href: "/services/ui-ux"
  },
  {
    title: "Full-Stack Development",
    description: "Next.js & React 19 engineered for speed, SEO, and seamless user interactions.",
    icon: Code2,
    color: "#1e40af", // Deep Blue
    lightBg: "bg-blue-50",
    href: "/services/development"
  },
  {
    title: "WordPress & WooCommerce",
    description: "Custom themes and robust e-commerce engines built on the world's most popular CMS.",
    icon: Globe,
    color: "#21759b", // WP Blue
    lightBg: "bg-sky-50",
    href: "/services/wordpress"
  },
  {
    title: "Shopify Development",
    description: "High-performance storefronts designed to scale, from Liquid customization to Hydrogen headless builds.",
    icon: Store,
    color: "#95bf47", // Shopify Green
    lightBg: "bg-lime-50",
    href: "/services/shopify"
  },
  {
    title: "CMS & Strategy",
    description: "Empowering your team with intuitive dashboards and flexible headless CMS integrations.",
    icon: Database,
    color: "#854d0e", // Muted Gold
    lightBg: "bg-amber-50",
    href: "/services/cms"
  },
  {
    title: "Maintenance & Growth",
    description: "Proactive security patching, performance monitoring, and monthly technical audits.",
    icon: Settings,
    color: "#0f766e", // Teal
    lightBg: "bg-teal-50",
    href: "/services/maintenance"
  }
];

export default function Services() {
  return (
    <section className="relative py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <div className="h-1 w-12 bg-[#800020] mb-6" />
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter uppercase text-zinc-900 dark:text-zinc-100">
              Technical <span className="font-normal italic">Competence</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm tracking-widest text-black-500 uppercase leading-relaxed">
            End-to-end development lifecycles from architecture to global maintenance.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="flex flex-col gap-0 relative">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="sticky top-[100px] w-full"
              style={{ 
                paddingTop: `${index * 40}px`,
                zIndex: index + 1 
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`
                  relative w-full overflow-hidden rounded-[2.5rem] 
                  border border-zinc-200 dark:border-zinc-800
                  ${service.lightBg} dark:bg-zinc-900/90 dark:backdrop-blur-xl
                  p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12
                  min-h-[500px] mb-20
                `}
              >
                {/* Visual Accent Glow */}
                <div 
                  className="absolute -top-40 -right-40 w-96 h-96 blur-[150px] rounded-full opacity-20 dark:opacity-40 pointer-events-none"
                  style={{ backgroundColor: service.color }}
                />

                {/* Left Side: Content */}
                <div className="flex-1 space-y-8 relative z-10">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5"
                      style={{ color: service.color }}
                    >
                      <service.icon size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">/ Solution 0{index + 1}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-6xl font-extralight tracking-tighter uppercase text-zinc-900 dark:text-zinc-50">
                      {service.title.split(' & ')[0].split(' ')[0]} <br />
                      <span className="font-normal italic lowercase text-[#800020] dark:text-zinc-400">
                        {service.title.includes('&') ? service.title.split(' & ')[1] : service.title.split(' ').slice(1).join(' ')}
                      </span>
                    </h3>
                    <p className="max-w-md text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  <Link 
                    href={service.href}
                    className="group inline-flex items-center gap-4 text-xs tracking-[0.2em] font-bold uppercase text-zinc-900 dark:text-zinc-100"
                  >
                    <span className="relative">
                      Explore Solution
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#800020] transition-all group-hover:w-full" />
                    </span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>

                {/* Right Side: Architectural Visual */}
                <div className="flex-1 w-full relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5">
                   {/* Radial dot grid pattern */}
                   <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]" 
                     style={{ backgroundImage: `radial-gradient(${service.color} 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
                   />
                   
                   <div className="flex items-center justify-center h-full relative group">
                      <div className="absolute w-48 h-48 rounded-full blur-3xl opacity-20" style={{ backgroundColor: service.color }} />
                      <service.icon 
                        size={180} 
                        strokeWidth={0.2} 
                        className="text-zinc-300 dark:text-zinc-800 transition-all duration-700 group-hover:scale-110 group-hover:text-zinc-400 dark:group-hover:text-zinc-700" 
                      />
                   </div>
                   
                   {/* Decorative tag */}
                   <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800 mr-4" />
                      <span className="text-[10px] font-mono tracking-widest text-zinc-400">Fenebris India Pvt. Ltd.</span>
                   </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}