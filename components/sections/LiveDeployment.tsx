"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { useCountUp } from "@/lib/hooks/useCountUp";

export function LiveDeployment() {
  const { ref, isInView } = useScrollReveal({ amount: 0.5 });

  const studentCount = useCountUp(150, 2000, isInView);
  const zoneCount = useCountUp(25, 2000, isInView);

  return (
    <section className="py-24 md:py-[120px] bg-white relative overflow-hidden border-t border-slate-100">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <SectionLabel label="Live Deployment" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight mb-8"
        >
          From invisible to observable —
          <br />
          <span className="text-indigo-600">in a single implementation.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-xl text-slate-500 leading-relaxed max-w-[640px] mx-auto mb-16"
        >
          Axior Pulse is live at an institutional campus, tracking student
          movement and presence across 25 operational zones in real time. What
          was previously managed through manual processes and guesswork is now a
          continuously observable, data-driven operational environment.
        </motion.p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border border-slate-100 rounded-3xl bg-slate-50 overflow-hidden flex flex-col md:flex-row mb-12 shadow-xl shadow-slate-100"
        >
          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100 bg-white m-2 rounded-2xl">
            <div className="font-sans font-extrabold tracking-tight text-[56px] md:text-[64px] text-slate-900 leading-none mb-3">
              {studentCount}
            </div>
            <div className="font-sans text-[12px] font-bold uppercase tracking-widest text-slate-500">
              Students
              <br />
              Tracked
            </div>
          </div>

          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100 bg-white m-2 rounded-2xl">
            <div className="font-sans font-extrabold tracking-tight text-[56px] md:text-[64px] text-slate-900 leading-none mb-3">
              {zoneCount}
            </div>
            <div className="font-sans text-[12px] font-bold uppercase tracking-widest text-slate-500">
              Zones
              <br />
              Monitored
            </div>
          </div>

          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-center h-full min-h-[160px] md:min-h-0 bg-white m-2 rounded-2xl">
            <div className="inline-flex items-center mb-4 text-emerald-500">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 relative"></span>
            </div>
            <div className="font-sans text-[13px] font-bold uppercase tracking-widest text-emerald-600 text-center">
              Real-Time
              <br />
              Visibility
              <br />
              Across Campus
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-4 justify-center items-center mt-12"
        >
          <div className="text-sm font-medium text-slate-500 font-sans text-center">
            Currently engaging with enterprises across
            <br className="hidden md:block" /> manufacturing, logistics,
            and smart facilities.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
