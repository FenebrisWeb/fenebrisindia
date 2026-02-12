"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus } from "lucide-react";

const FAQ_DATA = [
  {
    question: "What is Architectural Stewardship?",
    answer: "It is our commitment to the long-term integrity of a project. We don't just deliver a design; we ensure the technical and aesthetic foundations remain scalable and precise as your needs evolve.",
  },
  {
    question: "How do you ensure project speed without sacrificing quality?",
    answer: "Through expert-driven workflows. By removing internal overhead and using senior-level architects, we bypass the typical bottlenecks found in traditional agencies or in-house teams.",
  },
  {
    question: "Can you scale with enterprise-level requirements?",
    answer: "Yes. Our architecture is built on modularity. Whether it is digital infrastructure or physical systems, we design for high-traffic, high-stakes environments from day one.",
  },
  {
    question: "Do you offer post-completion support?",
    answer: "We view our engagements as partnerships. We provide ongoing strategic guidance and technical support to ensure the excellence we architected continues to perform.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick, index }: any) => {
  return (
    <motion.div 
      initial={false}
      className={`group mb-4 rounded-2xl border transition-all duration-500 ${
        isOpen 
          ? "bg-white dark:bg-zinc-900 border-[#800020]/30 shadow-[0_20px_40px_rgba(0,0,0,0.05)]" 
          : "bg-zinc-50/50 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full py-6 px-6 md:px-10 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-6">
          <span className={`hidden md:block text-[10px] font-bold tracking-[0.2em] transition-colors duration-300 ${
            isOpen ? "text-[#800020]" : "text-zinc-400"
          }`}>
            0{index + 1}
          </span>
          <h3 className={`text-base md:text-lg font-medium tracking-tight transition-colors duration-300 ${
            isOpen ? "text-[#800020] dark:text-[#a30029]" : "text-zinc-900 dark:text-zinc-100"
          }`}>
            {question}
          </h3>
        </div>
        
        <div className={`relative flex items-center justify-center w-6 h-6 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>
          <Plus 
            size={20} 
            strokeWidth={1.5} 
            className={isOpen ? "text-[#800020]" : "text-zinc-400 group-hover:text-zinc-600"} 
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="pb-8 px-6 md:px-[5.5rem] pr-10">
              <div className="h-[1px] w-8 bg-[#800020]/20 mb-6" />
              <p className="text-sm md:text-base text-zinc-900 dark:text-zinc-900 leading-relaxed font-light max-w-2xl">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden">
      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        
        {/* Modern One-Line Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tighter uppercase inline-flex items-center gap-4">
            Common <span className="font-normal italic text-[#800020] dark:text-[#a30029]">Inquiries</span>
          </h2>
          <div className="h-[1px] w-24 bg-[#800020] mt-6 opacity-50" />
        </motion.div>

        {/* Centered Modern Container */}
        <div 
          ref={containerRef} 
          className="w-full max-w-4xl"
        >
          {FAQ_DATA.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>

      {/* Grid Pattern Background Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] -z-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, #800020 1px, transparent 1px), linear-gradient(to bottom, #800020 1px, transparent 1px)`,
          backgroundSize: '80px 80px' 
        }} />
      </div>
    </section>
  );
}