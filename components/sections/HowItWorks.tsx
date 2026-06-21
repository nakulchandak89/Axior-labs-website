"use client";

import React from "react";
import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FRAMEWORK_STEPS } from "@/lib/constants";
import * as Icons from "lucide-react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export function HowItWorks() {
  const { ref, isInView } = useScrollReveal({ once: true, amount: 0.2 });

  return (
    <section className="py-24 md:py-[120px] bg-white border-t border-slate-100">
      <div className="max-w-[1200px] w-full mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-[600px]">
            <SectionLabel label="The Axior Framework" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mt-4"
            >
              Observe. Understand. Optimize.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block max-w-[400px]"
          >
            <p className="font-sans text-lg text-slate-500 border-l-4 border-indigo-100 pl-6">
              Every intelligent operation follows the same arc. We build the
              infrastructure that makes it possible.
            </p>
          </motion.div>
        </div>

        <div className="md:hidden mb-12">
          <p className="font-sans text-lg text-slate-500 border-l-4 border-indigo-100 pl-4">
            Every intelligent operation follows the same arc. We build the
            infrastructure that makes it possible.
          </p>
        </div>

        <div
          ref={ref}
          className="flex flex-col md:flex-row gap-6 md:gap-4 items-stretch justify-between"
        >
          {FRAMEWORK_STEPS.map((step, i) => {
            const Icon = (Icons as any)[step.icon];
            const isLast = i === FRAMEWORK_STEPS.length - 1;

            return (
              <React.Fragment key={step.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.15 * i,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="flex-1 bg-slate-50 p-8 border border-slate-100 rounded-3xl relative overflow-hidden group hover:border-indigo-200 transition-colors duration-300"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shadow-slate-200 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        {Icon && <Icon size={24} strokeWidth={2} />}
                      </div>
                      <span className="font-sans text-2xl font-bold text-slate-200 pointer-events-none select-none">
                        {step.id}
                      </span>
                    </div>

                    <h3 className="font-sans text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>

                    <p className="font-sans text-sm leading-relaxed text-slate-500 mt-auto">
                      {step.body}
                    </p>
                  </div>
                </motion.div>

                {!isLast && (
                  <motion.div
                    key={`arrow-h-${step.id}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + 0.15 * i,
                    }}
                    className="hidden md:flex items-center justify-center text-slate-300 w-8 flex-shrink-0"
                  >
                    <Icons.ArrowRight strokeWidth={1.5} />
                  </motion.div>
                )}
                {!isLast && (
                  <motion.div
                    key={`arrow-v-${step.id}`}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + 0.15 * i,
                    }}
                    className="md:hidden flex items-center justify-center py-2 text-slate-300"
                  >
                    <Icons.ArrowDown strokeWidth={1.5} />
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
