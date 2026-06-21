"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { INDUSTRIES } from "@/lib/constants";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export function Industries() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="industries"
      className="py-24 md:py-[120px] bg-white border-t border-slate-100"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center max-w-[800px] mx-auto flex justify-center flex-col items-center">
          <SectionLabel label="Industries" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mt-4"
          >
            Built for environments where
            <br className="hidden md:block" />
            <span className="text-indigo-600">operations never stop.</span>
          </motion.h2>
        </div>

        <motion.div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 24 }
              }
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 transition-all duration-250 hover:border-indigo-200 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-sans text-lg font-bold text-slate-900 max-w-[200px] leading-tight">
                  {industry.title}
                </h3>
                {industry.live && (
                  <div className="flex items-center font-sans text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                    LIVE
                    <span className="w-2 h-2 rounded-full bg-emerald-500 ml-1.5 animate-ping absolute ml-[26px]"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 ml-1.5 relative"></span>
                  </div>
                )}
              </div>

              <p className="font-sans text-sm leading-relaxed text-slate-500 mt-auto">
                {industry.features}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
