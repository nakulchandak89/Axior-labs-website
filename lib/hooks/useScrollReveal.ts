import { useRef } from "react";
import { useInView } from "motion/react";

export function useScrollReveal(
  options: { once?: boolean; amount?: number } = {
    once: true,
    amount: 0.15,
  }
) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once ?? true,
    amount: options.amount ?? 0.15,
  });

  return { ref, isInView };
}
