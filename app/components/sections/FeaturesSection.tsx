"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Zap, Award, ArrowRight } from "lucide-react";

const features = [
    {
        title: "Precision Driven",
        description:
            "Delivering exact solutions tailored to your specific business architecture and goals.",
        icon: Target,
    },
    {
        title: "Security First",
        description:
            "Implementing robust safeguards to protect your digital assets at every single layer.",
        icon: Shield,
    },
    {
        title: "High Performance",
        description:
            "Optimized workflows designed to scale and accelerate your global market presence.",
        icon: Zap,
    },
    {
        title: "Proven Excellence",
        description:
            "A track record of delivering industry-leading results for our global partners.",
        icon: Award,
    },
];

const FeaturesSection = () => {
    return (
        <section className="relative py-16 md:py-24 bg-background overflow-hidden transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#800020]/10 dark:bg-[#800020]/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "3rem" }}
                            className="h-1 mb-6"
                            style={{ backgroundColor: "#800020" }}
                        />
                        <h2 className="text-5xl font-extralight tracking-tighter text-foreground leading-tight">
                            Crafting <span className="font-normal italic">Digital</span> <br />
                            <span className="font-medium" style={{ color: "#800020" }}>
                                Superiority
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-xs text-sm tracking-widest text-muted-foreground uppercase leading-relaxed">
                        Beyond standard development—we build the future of your industry.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/50 border border-border/50 rounded-3xl overflow-hidden">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-8 md:p-12 bg-background hover:bg-zinc-50 transition-all duration-500"
                        >
                            {/* Icon */}
                            <div className="relative z-10 mb-8 inline-flex items-center justify-center">
                                <div
                                    className="absolute inset-0 scale-150 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"
                                    style={{ backgroundColor: "#800020" }}
                                />
                                <feature.icon
                                    size={40}
                                    strokeWidth={1}
                                    className="text-foreground/70 group-hover:text-black transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-light mb-4 tracking-tight flex items-center gap-3 text-foreground group-hover:text-black transition-colors duration-500">
                                {feature.title}
                                <ArrowRight
                                    className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                                    style={{ color: "#800020" }}
                                />
                            </h3>

                            {/* Description */}
                            <p className="text-base md:text-lg font-extralight leading-relaxed max-w-sm text-muted-foreground group-hover:text-black transition-colors duration-500">
                                {feature.description}
                            </p>

                            {/* Corner Accent */}
                            <div
                                className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-500 rounded-tr-xl"
                                style={{ borderColor: "#800020" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
