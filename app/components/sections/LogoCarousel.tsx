"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder logos - replace with your actual paths in /public/brand-logo/
const row1 = [
  "/brand-logo/Byjus.png",
  "/brand-logo/dlf.png",
  "/brand-logo/Magic-Bricks.png",
  "/brand-logo/omsxe.png",
  "/brand-logo/Magic-Bricks.png",
  "/brand-logo/feel-good.png",
  "/brand-logo/health-mug.png",
  "/brand-logo/health-mug.png",
  "/brand-logo/health-mug.webp",
  "/brand-logo/health-mug.png",
  "/brand-logo/wisekart.png",
];

const row2 = [
  "/brand-logo/feel-good.png",
  "/brand-logo/health-mug.png",
  "/brand-logo/health-mug.png",
  "/brand-logo/health-mug.webp",
  "/brand-logo/health-mug.png",
  "/brand-logo/wisekart.png",
  "/brand-logo/Byjus.png",
  "/brand-logo/dlf.png",
  "/brand-logo/Magic-Bricks.png",
  "/brand-logo/omsxe.png",
  "/brand-logo/Magic-Bricks.png",
];

const InfiniteSlider = ({ items, direction }: { items: string[], direction: "left" | "right" }) => {
  const xTranslation = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="relative flex overflow-hidden py-8">
      <motion.div
        animate={{ x: xTranslation }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-12 whitespace-nowrap px-6"
      >
        {/* Duplicate items for seamless looping */}
        {[...items, ...items, ...items, ...items].map((logo, index) => (
          <div
            key={index}
            className="relative h-12 w-32 shrink-0 grayscale transition-all duration-300 hover:grayscale-0 md:h-16 md:w-40"
          >
            <Image
              src={logo}
              alt="Brand Partner"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
      
      {/* Gradient Fades for the edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
};

export default function LogoCarousel() {
  return (
    <section className="bg-background py-16 transition-colors duration-300 lg:py-24">
      <div className="mb-12 text-center px-4">
        <h2 className="text-sm font-semibold tracking-widest text-[#800020] uppercase">
          Trusted Partners
        </h2>
        <p className="mt-2 text-2xl font-light md:text-3xl">Collaborating with Industry Leaders</p>
      </div>

      <div className="flex flex-col gap-4 border-y border-border-brand/50">
        <InfiniteSlider items={row1} direction="left" />
        <div className="h-px w-full bg-border-brand/20" />
        <InfiniteSlider items={row2} direction="right" />
      </div>
    </section>
  );
}