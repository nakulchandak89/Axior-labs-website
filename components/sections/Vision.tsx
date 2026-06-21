"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Vision() {
  return (
    <section
      id="vision"
      className="py-24 md:py-[160px] bg-slate-50 flex items-center justify-center text-center border-t border-slate-100"
    >
      <div className="max-w-[800px] w-full px-6 flex flex-col items-center">
        <SectionLabel label="Our Vision" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans text-[40px] md:text-[56px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mt-6 mb-12"
        >
          Physical systems should be as observable as modern software
          infrastructure.
        </motion.h2>

        <div className="flex flex-col gap-8 max-w-[680px] mx-auto text-lg md:text-[20px] leading-relaxed">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-slate-500"
          >
            The software world figured this out a decade ago. Observability
            platforms transformed how engineering teams understand, debug, and
            optimize complex systems in real time.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-indigo-600 font-bold text-xl md:text-2xl"
          >
            The physical world is still waiting.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-sans text-slate-500"
          >
            Axior Labs is building that layer — the operational intelligence
            infrastructure that makes every facility, every asset, and every
            workflow as measurable and understandable as a line of code.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-[80px] border-t border-slate-200 pt-8"
        >
          <p className="font-sans text-base font-bold text-slate-400 uppercase tracking-widest">
            Starting with enterprises and institutions across India.
            <br className="hidden md:block" />
            Building toward the global operational intelligence layer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
