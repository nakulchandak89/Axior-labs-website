"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PROBLEM_CARDS } from "@/lib/constants";
import * as Icons from "lucide-react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export function Problem() {
  const { ref, isInView } = useScrollReveal();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section
      id="problem"
      className="py-24 md:py-[120px] bg-white relative"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center max-w-[800px] mx-auto flex justify-center flex-col items-center">
          <SectionLabel label="The Visibility Gap" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mt-4 mb-6"
          >
            Your operations are generating intelligence.
            <br className="hidden md:block" />
            <span className="text-indigo-600">You just can&apos;t see it yet.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-xl text-slate-500 max-w-[600px] leading-relaxed mx-auto"
          >
            Most organizations have digitized their information systems. Their
            physical operations are still running blind.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {PROBLEM_CARDS.map((card, i) => {
            const Icon = (Icons as any)[card.icon];

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative bg-slate-50 border border-slate-100 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm shadow-slate-200 text-indigo-600">
                  {Icon && <Icon size={24} strokeWidth={2} />}
                </div>

                <h3 className="font-sans text-lg font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>

                <p className="font-sans text-sm leading-relaxed text-slate-500">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
