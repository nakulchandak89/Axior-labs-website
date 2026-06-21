"use client";

import { motion } from "motion/react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export function SectionLabel({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6 ${className}`}
    >
      {label}
    </motion.div>
  );
}
