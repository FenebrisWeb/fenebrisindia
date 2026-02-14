"use client";

import React from "react";
import Image from "next/image";

const partners = [
  { id: 1, src: "/partner-logo/1.webp", alt: "Partner 1" },
  { id: 2, src: "/partner-logo/2.png", alt: "Partner 2" },
  { id: 3, src: "/partner-logo/3.webp", alt: "Partner 3" },
  { id: 4, src: "/partner-logo/4.png", alt: "Partner 4" },
  { id: 5, src: "/partner-logo/5.webp", alt: "Partner 5" },
];

const PartnerSlider = () => {
  // We double the array to create a seamless infinite loop effect
  const slidingLogos = [...partners, ...partners, ...partners];

  return (
    <section className="w-full py-16 bg-white dark:bg-[#020617] overflow-hidden border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-[1920px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tighter uppercase inline-flex items-center gap-4">
            Trusted by <span className="font-normal italic text-[#800020] dark:text-[#a30029]">Global Leaders</span>
          </h2>
          <div className="h-1 w-20 bg-[#800020] mx-auto rounded-full"></div>
        </div>

        {/* Logo Slider Container */}
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
            {slidingLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex items-center justify-center mx-8 md:mx-12 min-w-[150px] md:min-w-[200px]"
              >
                <div className="relative h-20 w-40 transition-all duration-300  hover:grayscale-0 hover:opacity-100 dark:brightness-200 dark:hover:brightness-100">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnerSlider;