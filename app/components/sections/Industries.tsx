"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Industries = () => {
  return (
    /* Ensure no parent of this div has overflow-hidden */
    <div className="bg-background">
      {/* Header Section */}
      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="h-1 w-12 bg-[#800020] mb-4" /> 
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter text-foreground">
              Industries <span className="font-normal italic">We Serve</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm tracking-widest text-zinc-500 uppercase leading-relaxed">
            Catering to diverse business niches and objectives with our innovative, valuable digital solutions.
          </p>
        </div>
      </div>

      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  
  // scrollYProgress tracks the scroll position within targetRef
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // This maps the vertical scroll (0 to 1) to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    /* h-[150vh] provides the scrollable space. 
       If this is too small, the horizontal movement will be too fast.
    */
    <section ref={targetRef} className="relative h-[150vh] bg-background">
      {/* The 'sticky' element must be inside a relative container 
          with more height than itself to stick.
      */}
      <div className="sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 md:gap-8 px-4 md:px-12">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[350px] w-[300px] md:h-[450px] md:w-[450px] shrink-0 overflow-hidden bg-neutral-900 border border-white/5"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
      ></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-colors group-hover:bg-[#800020]/30">
        <h3 className="text-2xl md:text-5xl font-thin uppercase text-white tracking-tighter">
          {card.title}
        </h3>
      </div>
    </div>
  );
};

export default Industries;

const cards = [
  { url: "/imgs/abstract/1.jpg", title: "E-Commerce", id: 1 },
  { url: "/imgs/abstract/2.jpg", title: "Real Estate", id: 2 },
  { url: "/imgs/abstract/3.jpg", title: "Healthcare", id: 3 },
  { url: "/imgs/abstract/4.jpg", title: "Education", id: 4 },
  { url: "/imgs/abstract/5.jpg", title: "Fintech", id: 5 },
  { url: "/imgs/abstract/6.jpg", title: "Logistics", id: 6 },
  { url: "/imgs/abstract/7.jpg", title: "Marketing", id: 7 },
];