"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let current = "";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = `#${section}`;
        }
      }
      setActiveHash(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-white/90 border-b border-slate-100 py-4 shadow-sm"
            : "py-6 bg-white border-b border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded"
          >
            <Logo className="h-8 md:h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors py-1 ${
                      isActive
                        ? "text-slate-900 font-bold"
                        : "text-slate-500 hover:text-indigo-600"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 rounded-full transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
            <Button label="Book a Call" icon={ArrowRight} href="#cta" />
          </nav>

          <button
            className="md:hidden text-slate-600 p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white px-6 py-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">
                  Axior.Labs
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-400 hover:text-slate-900 p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 font-sans font-extrabold text-3xl">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-500 hover:text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto mb-8">
              <Button
                label="Book a Discovery Call"
                icon={ArrowRight}
                size="lg"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
                href="#cta"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
