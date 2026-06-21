import { StatusPillProps } from "@/lib/types";

export function StatusPill({ label, variant }: StatusPillProps) {
  const isLive = variant === "live";

  const colors = {
    live: "bg-emerald-50 text-emerald-600 border-emerald-100",
    active: "bg-indigo-50 text-indigo-600 border-indigo-100",
    monitoring: "bg-slate-100 text-slate-600 border-slate-200",
    processing: "bg-indigo-50 text-indigo-600 border-indigo-100",
  };

  const dotColors = {
    live: "bg-emerald-500",
    active: "bg-indigo-600",
    monitoring: "bg-slate-400",
    processing: "bg-indigo-500",
  };

  return (
    <div
      className={`inline-flex items-center font-sans text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${colors[variant as keyof typeof colors]}`}
    >
      {isLive ? (
        <span
          className={`w-2 h-2 rounded-full ${dotColors.live} animate-pulse mr-2`}
        ></span>
      ) : (
        <span
          className={`w-2 h-2 rounded-full mr-2 ${dotColors[variant as keyof typeof dotColors]}`}
        ></span>
      )}
      {label}
    </div>
  );
}
