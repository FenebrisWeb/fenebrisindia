"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Innovative Architecture",
    description: "Creating spaces that inspire and endure.",
    image: "/hero/banner1.webP", 
  },
  {
    id: 2,
    title: "Modern Design",
    description: "Advanced solutions for your business growth.",
    image: "/hero/banner2.webP",
  },
  {
    id: 3,
    title: "Precision Engineering",
    description: "Quality and excellence in every detail.",
    image: "/hero/banner1.webP",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Zoom Effect Background */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "linear" }}
            className="relative h-full w-full"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover opacity-70"
              priority
            />
          </motion.div>

          {/* Text Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-3xl text-5xl font-light tracking-tighter text-white md:text-7xl"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-4 max-w-lg text-lg text-gray-300"
            >
              {slides[current].description}
            </motion.p>
            
            {/* Brand Accent Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8"
            >
              <button className="border border-white px-8 py-3 text-sm tracking-widest text-white transition-colors hover:bg-[#800020] hover:border-[#800020]">
                DISCOVER MORE
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Vertical Navigation (ISO Design Style) */}
      <div className="absolute right-10 top-1/2 flex -translate-y-1/2 flex-col gap-6 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="group relative flex h-12 w-1 items-center"
          >
            <div 
              className={`h-full w-px transition-all duration-500 ${
                current === index ? "bg-[#800020] w-[2px]" : "bg-white/30"
              }`} 
            />
            <span className={`absolute right-4 text-xs font-mono transition-opacity ${
              current === index ? "text-white opacity-100" : "text-white/40 opacity-0 group-hover:opacity-100"
            }`}>
              0{index + 1}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}