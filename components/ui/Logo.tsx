export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
            .logo-blue { fill: #0d6af2; font-family: ui-sans-serif, system-ui, -apple-system, sans-serif; font-weight: 600; font-size: 42px; letter-spacing: -0.02em; }
            .logo-black { fill: #000000; font-family: ui-sans-serif, system-ui, -apple-system, sans-serif; font-weight: 500; font-size: 42px; letter-spacing: -0.02em; }
          `}</style>
      </defs>

      <rect x="2" y="10" width="22" height="4" rx="2" fill="#0d6af2" />

      <text x="0" y="46" className="logo-blue">
        axior
      </text>
      <text x="100" y="46" className="logo-black">
        labs
      </text>
    </svg>
  );
}
