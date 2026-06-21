"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen bg-white pt-24 sm:pt-32 pb-16 flex items-center overflow-hidden border-b border-slate-100">
      <div className="max-w-[900px] w-full mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <motion.div
          className="z-10 flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 sm:mb-6 flex items-center gap-2"
          >
            <div className="flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 uppercase tracking-widest whitespace-nowrap">
                Pilot Deployment Live
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.05] tracking-tight text-slate-900 mb-6"
          >
            <span className="text-indigo-600">Axior Labs</span>
            <br />
            Connecting People, Assets &amp;
            <br />
            <span className="text-indigo-600">Intelligent Operations.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed mb-8 sm:mb-10 max-w-[700px]"
          >
            Axior Labs builds the intelligence layer that connects people,
            assets, facilities, and workflows — transforming fragmented
            operations into real-time, data-driven systems your organization can
            finally see, understand, and act on.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10"
          >
            <Button
              label="Book a Discovery Call"
              icon={ArrowRight}
              size="lg"
              href="#cta"
            />
            <Button
              label="See How It Works"
              variant="ghost"
              icon={ArrowDown}
              size="lg"
              href="#problem"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 sm:gap-4"
          >
            <div className="flex items-center -space-x-2">
              <div className="pl-3 sm:pl-4 text-xs sm:text-sm font-medium text-slate-400 font-sans">
                Building operational intelligence for enterprises across India
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
