"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="cta"
      className="py-24 md:py-[120px] bg-white border-t border-slate-100"
    >
      <div className="max-w-[800px] w-full mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
        >
          Your operations are ready
          <br />
          <span className="text-indigo-600">to become observable.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-xl text-slate-500 mb-12 max-w-[500px] mx-auto"
        >
          Talk to our team about what operational intelligence could look like
          for your organization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <Button label="Book a Discovery Call" size="lg" icon={ArrowRight} />

          <p className="mt-6 font-sans text-sm font-medium text-slate-400 max-w-[300px]">
            No commitment. No generic pitch deck. A focused conversation about
            your operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
