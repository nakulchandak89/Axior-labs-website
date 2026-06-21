interface BadgeProps {
  label: string;
  className?: string;
}

export function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-sans text-xs font-bold tracking-widest uppercase bg-slate-50 text-slate-600 border border-slate-100 px-4 py-2 rounded-full transition-colors duration-150 hover:bg-slate-100 cursor-default ${className}`}
    >
      {label}
    </span>
  );
}
