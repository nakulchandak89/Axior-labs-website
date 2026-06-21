import { FOOTER_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="px-10 py-12 border-t border-slate-100 bg-white text-xs text-slate-400 font-medium">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:pr-12">
            <div className="mb-6">
              <Logo className="h-8 w-auto text-left" />
            </div>
            <p className="leading-relaxed text-slate-500 text-sm">
              &ldquo;The operational intelligence layer
              <br />
              for the physical world.&rdquo;
            </p>
          </div>

          <div>
            <h4 className="flex gap-6 uppercase tracking-wider text-slate-900 mb-6 font-bold">
              Company
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-500">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="flex gap-6 uppercase tracking-wider text-slate-900 mb-6 font-bold">
              Solutions
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-500">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="flex gap-6 uppercase tracking-wider text-slate-900 mb-6 font-bold">
              Connect
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-500">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          <p>&copy; 2026 Axior Labs Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              System Status: All Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
