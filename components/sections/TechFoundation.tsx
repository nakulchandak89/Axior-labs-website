"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TECH_STACK } from "@/lib/constants";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

export function TechFoundation() {
  const { ref, isInView } = useScrollReveal({ amount: 0.3 });

  return (
    <section className="py-24 md:py-[120px] bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6">
        <div className="max-w-[640px] mb-16">
          <SectionLabel label="Technology Foundation" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mt-4 mb-6"
          >
            Every layer of the stack,
            <br />
            <span className="text-indigo-600">
              built for operational reality.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-xl text-slate-500 leading-relaxed"
          >
            We don&apos;t assemble third-party tools and call it a platform. We
            engineer integrated systems where every component is designed to
            work as a unified operational intelligence layer.
          </motion.p>
        </div>

        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
          <motion.div
            ref={ref}
            className="flex flex-wrap justify-center items-center gap-3"
          >
            {TECH_STACK.map((tech, i) => {
              const isLast = i === TECH_STACK.length - 1;
              return (
                <span key={tech} className="inline-flex items-center gap-3">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -10 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                    className="font-sans text-[14px] font-semibold text-slate-600 bg-slate-50 px-6 py-3 rounded-full border border-slate-100 transition-colors duration-150 hover:bg-white hover:text-indigo-600 hover:border-indigo-200 hover:shadow-sm cursor-default whitespace-nowrap"
                  >
                    {tech}
                  </motion.span>

                  {!isLast && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 + i * 0.1,
                      }}
                      className="text-slate-300"
                    >
                      <ArrowRight size={16} strokeWidth={1.5} />
                    </motion.span>
                  )}
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
