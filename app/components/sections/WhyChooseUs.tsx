"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Layers, Users, Building2, User, MousePointer2 } from "lucide-react";

const CRITERIA = ["Speed", "Flexibility", "Quality", "Scalability", "Affordability"] as const;
type Criterion = (typeof CRITERIA)[number];

const PLATFORMS = [
  {
    id: "fenebris",
    name: "Fenebris India Pvt. Ltd.",
    description: "Expert-driven architecture & committed to high-end precision. Full support without internal overhead.",
    highlighted: true,
    icon: Layers,
    scores: { Speed: true, Flexibility: true, Quality: true, Scalability: true, Affordability: true },
  },
  {
    id: "inhouse",
    name: "In-House Team",
    description: "Consistent presence, but high overhead and limited to a specific internal skill set.",
    highlighted: false,
    icon: Users,
    scores: { Speed: false, Flexibility: false, Quality: true, Scalability: true, Affordability: false },
  },
  {
    id: "agencies",
    name: "Creative Agencies",
    description: "Structured processes but often burdened by high costs and rigid timelines.",
    highlighted: false,
    icon: Building2,
    scores: { Speed: false, Flexibility: false, Quality: true, Scalability: true, Affordability: false },
  },
  {
    id: "freelancers",
    name: "Freelancers",
    description: "Budget-friendly but lack consistency and long-term architectural stewardship.",
    highlighted: false,
    icon: User,
    scores: { Speed: true, Flexibility: true, Quality: false, Scalability: false, Affordability: true },
  },
  {
    id: "diy",
    name: "Self-Service",
    description: "Speedy entry, but lacks strategic thinking, originality, and enterprise scalability.",
    highlighted: false,
    icon: MousePointer2,
    scores: { Speed: true, Flexibility: false, Quality: false, Scalability: false, Affordability: true },
  },
];

const CheckMark = ({ highlighted }: { highlighted: boolean }) => (
  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border transition-all ${
    highlighted 
      ? "bg-white/20 border-white/40" 
      : "bg-emerald-500/10 border-emerald-500/50"
  }`}>
    <Check size={14} className={highlighted ? "text-white" : "text-emerald-500"} strokeWidth={3} />
  </div>
);

const XMark = () => (
  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
    <X size={14} className="text-rose-500/40" strokeWidth={2} />
  </div>
);

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-500 overflow-hidden">
      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="max-w-2xl"
          >
            <div className="h-1 w-12 bg-[#800020] mb-6" />
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter uppercase leading-tight">
              Why Choose <br />
              <span className="font-normal italic text-[#E52126] dark:text-[#a30029]">Fenebris</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="max-w-xs text-sm tracking-widest text-zinc-500 uppercase leading-relaxed font-medium"
          >
            Why Fenebris? Because we architect excellence where others settle for standard.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative">
          
          {/* Desktop Labels Row */}
          <div className="hidden md:grid grid-cols-[2fr_repeat(5,1fr)] items-center px-12 mb-6">
            <span className="text-[12px] lg:text-[14px] font-bold tracking-[0.3em] text-[#E52126] dark:text-[#E52126] uppercase">Architecture Type</span>
            {CRITERIA.map((c) => (
              <span key={c} className="text-[12px] lg:text-[14px] font-bold tracking-[0.3em] text-zinc-400 uppercase text-center">{c}</span>
            ))}
          </div>

          {/* Cards Container: Horizontal Scroll on Mobile, Column on Desktop */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar gap-4 pb-8 md:pb-0">
            {PLATFORMS.map((platform, idx) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -5 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`
                  relative flex-none w-[85vw] md:w-full snap-center overflow-hidden rounded-[2rem] border transition-all duration-500
                  ${platform.highlighted 
                    ? "bg-[#800020] border-[#800020] shadow-[0_20px_50px_rgba(128,0,32,0.3)] z-10" 
                    : "bg-white dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800 shadow-sm"}
                `}
              >
                {platform.highlighted && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -mr-32 -mt-32 rounded-full pointer-events-none" />
                )}

                <div className="grid grid-cols-1 md:grid-cols-[2fr_repeat(5,1fr)] items-center p-6 md:px-12 md:py-10">
                  
                  {/* Platform Name & Info */}
                  <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-0">
                    <div className={`
                      w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex-none flex items-center justify-center border shadow-inner
                      ${platform.highlighted 
                        ? "bg-white/10 border-white/20 text-white" 
                        : "bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-[#800020]"}
                    `}>
                      <platform.icon size={24} className="md:w-[28px] md:h-[28px]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className={`text-lg md:text-xl font-bold uppercase tracking-tighter ${platform.highlighted ? "text-white" : "text-zinc-900 dark:text-zinc-100"}`}>
                          {platform.name}
                        </h4>
                        {platform.highlighted && (
                          <span className="bg-white/20 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-widest border border-white/30">Standard</span>
                        )}
                      </div>
                      <p className={`text-xs md:text-sm mt-1 max-w-[280px] leading-relaxed font-light ${platform.highlighted ? "text-white/70" : "text-zinc-900 dark:text-zinc-400"}`}>
                        {platform.description}
                      </p>
                    </div>
                  </div>

                  {/* Criteria Scores: Horizontal Line on Mobile */}
                  <div className="flex flex-row md:contents justify-between items-center md:justify-center border-t md:border-t-0 border-white/10 pt-6 md:pt-0">
                    {CRITERIA.map((c) => (
                      <div key={c} className="flex flex-col items-center gap-3 md:gap-0">
                        {/* Mobile specific label */}
                        <span className={`text-[8px] font-bold uppercase tracking-[0.1em] md:hidden ${platform.highlighted ? "text-white/40" : "text-zinc-400"}`}>
                          {c}
                        </span>
                        {platform.scores[c] ? <CheckMark highlighted={platform.highlighted} /> : <XMark />}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Background Accent */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.08]">
           <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#800020 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
      </div>
      
      {/* Global Style for hiding scrollbars while maintaining functionality */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}