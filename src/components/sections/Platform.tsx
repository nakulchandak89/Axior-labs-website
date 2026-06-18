import React from 'react';
import { motion } from 'motion/react';
import { SectionLabel } from '../ui/SectionLabel';
import { PLATFORM_CARDS } from '../../lib/constants';
import * as Icons from 'lucide-react';
import { useScrollReveal } from '../../lib/hooks/useScrollReveal';
import { IntelligenceCard } from '../ui/IntelligenceCard';

export function Platform() {
  const { ref, isInView } = useScrollReveal({ amount: 0.1 });

  return (
    <section id="platform" className="py-24 md:py-[120px] bg-white border-t border-slate-100">
      <div className="max-w-[1200px] w-full mx-auto px-6">
        
        <div className="mb-16 md:mb-20 max-w-[700px]">
          <SectionLabel label="The Platform" className="" />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-4xl md:text-[56px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mt-4 mb-6"
          >
            Axior Pulse<br />
            <span className="text-indigo-600">One intelligence layer.<br />Every operational system.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-xl text-slate-500 leading-relaxed max-w-[580px]"
          >
            A unified platform connecting physical infrastructure, workforce activity, and enterprise systems — giving organizations a single, real-time operational picture.
          </motion.p>
        </div>

        <div 
          ref={ref}
          className="grid md:grid-cols-2 gap-6"
        >
          {PLATFORM_CARDS.map((card, i) => {
            const Icon = (Icons as any)[card.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <IntelligenceCard 
                  title={card.title}
                  body={card.body}
                  icon={Icon}
                  status={card.status as any}
                  variant="light"
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
