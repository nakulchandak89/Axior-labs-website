"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PLATFORM_CARDS } from "@/lib/constants";
import * as Icons from "lucide-react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { IntelligenceCard } from "@/components/ui/IntelligenceCard";

export function Platform() {
  const { ref, isInView } = useScrollReveal({ amount: 0.1 });

  return (
    <section
      id="platform"
      className="py-24 md:py-[120px] bg-white border-t border-slate-100"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6">
        <div className="mb-16 md:mb-20 max-w-[700px]">
          <SectionLabel label="The Platform" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mt-4"
          >
            Four integrated intelligence layers.
            <br />
            <span className="text-indigo-600">
              One unified view of operations.
            </span>
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {PLATFORM_CARDS.map((card, i) => {
            const Icon = (Icons as any)[card.icon];
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1] as const,
                    },
                  },
                }}
              >
                <IntelligenceCard
                  title={card.title}
                  body={card.body}
                  icon={Icon}
                  status={card.status}
                  variant="dark"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
