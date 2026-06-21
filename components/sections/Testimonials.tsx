"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote:
      "Axior's platform gave us real-time visibility into our factory operations we never had before. Downtime dropped by 40% in the first quarter.",
    author: "Vikram Mehta",
    role: "VP of Operations, Manufacturing Sector",
  },
  {
    quote:
      "The ability to monitor and predict equipment failures before they happen is transformative. We've fundamentally changed our maintenance approach.",
    author: "Priya Sharma",
    role: "Director of Engineering, Logistics & Supply Chain",
  },
  {
    quote:
      "Integrating Axior into our existing infrastructure was seamless. Within weeks we had observability across facilities we'd been managing blind for years.",
    author: "Arun Patel",
    role: "CTO, Smart Infrastructure",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-[160px] bg-white border-t border-slate-100"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <SectionLabel label="Testimonials" className="justify-center" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[40px] md:text-[56px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mt-6"
          >
            Trusted by industry leaders
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col bg-slate-50 rounded-2xl p-8 border border-slate-100"
            >
              <p className="font-sans text-slate-600 text-[15px] md:text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-8 pt-6 border-t border-slate-200">
                <strong className="font-sans font-bold text-slate-900 block">
                  {t.author}
                </strong>
                <span className="font-sans text-sm text-slate-400">
                  {t.role}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
