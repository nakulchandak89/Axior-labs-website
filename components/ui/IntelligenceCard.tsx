"use client";

import { useState } from "react";
import { IntelligenceCardProps } from "@/lib/types";
import { StatusPill } from "./StatusPill";

export function IntelligenceCard({
  title,
  body,
  icon: Icon,
  status,
}: IntelligenceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-3xl p-8 bg-slate-50 border border-slate-100 flex flex-col transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-xl hover:border-indigo-100 overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {status && (
        <div className="mb-6 flex justify-between items-start">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shadow-slate-200 text-indigo-600">
            <Icon size={24} strokeWidth={2} />
          </div>
          <StatusPill label={status.label} variant={status.variant} />
        </div>
      )}

      {!status && Icon && (
        <div className="mb-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shadow-slate-200 text-indigo-600">
          <Icon size={24} strokeWidth={2} />
        </div>
      )}

      <h3 className="font-sans font-bold text-lg mb-2 text-slate-900">
        {title}
      </h3>
      <p className="font-sans text-sm leading-relaxed text-slate-500">
        {body}
      </p>
    </div>
  );
}
