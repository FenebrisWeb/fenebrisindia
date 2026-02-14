"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

export default function HeroAnimatedBG() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ===== BASE VISIBLE BACKGROUND ===== */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(600px at 20% 30%, rgba(128,0,32,0.6), transparent 60%),
            radial-gradient(500px at 80% 70%, rgba(255,255,255,0.12), transparent 65%),
            linear-gradient(to bottom, #050505, #000000)
          `,
        }}
      />

      {/* ===== GRID OVERLAY ===== */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ===== PARALLAX GLOWS ===== */}
      <motion.div
        className="absolute inset-0"
        style={{
          translateX: x,
          translateY: y,
        }}
      >
        <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-[#800020] opacity-40 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-white opacity-10 blur-[160px]" />
      </motion.div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-20">
        <div className="max-w-6xl">

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-block border border-white/20 px-4 py-2 text-xs tracking-widest uppercase text-white/70 backdrop-blur"
          >
            Interactive Digital Experiences
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl xl:text-8xl font-light leading-[1.05]"
          >
            Building <br />
            <span className="text-[#800020] font-medium">
              Living Interfaces
            </span>{" "}
            for Modern Brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-xl text-lg text-white/65"
          >
            We design animated, intelligent digital systems that react, adapt,
            and scale with your users.
          </motion.p>

          {/* ===== CTA BUTTONS (ALIGNED) ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center gap-8"
          >
            <Link
              href="/contact-us"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#800020] px-8 text-sm font-semibold hover:bg-[#660018] transition"
            >
              Start a Project
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center text-sm tracking-wide text-white/80 hover:text-white"
            >
              View Work →
            </Link>
          </motion.div>

        </div>
      </div>

      {/* ===== SCROLL ===== */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/50">
        SCROLL
      </div>
    </section>
  );
}
