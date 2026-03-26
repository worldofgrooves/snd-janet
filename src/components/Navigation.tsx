"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PlumeIcon from "@/components/PlumeIcon";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-bg/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 font-display text-text-primary font-bold tracking-tight text-lg"
            >
              <PlumeIcon className="h-5 w-5 text-accent flex-shrink-0" />
              Plume Creative
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-wide transition-colors duration-200 ${
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/start"
                className="inline-block px-5 py-2.5 bg-accent text-white text-sm font-medium tracking-wide rounded-sm hover:bg-accent-hover transition-colors duration-200"
              >
                Start a Project
              </Link>
            </div>

            {/* Mobile hamburger -- absolute-positioned bars for clean X transition */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-9 h-9 flex items-center justify-center z-[80]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span className="relative block w-5 h-[13px]">
                {/* Top bar */}
                <span
                  className={`absolute left-0 w-5 h-px bg-text-primary transition-all duration-300 origin-center ${
                    mobileOpen ? "top-[6px] rotate-45" : "top-0"
                  }`}
                />
                {/* Middle bar */}
                <span
                  className={`absolute left-0 top-[6px] w-5 h-px bg-text-primary transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                {/* Bottom bar */}
                <span
                  className={`absolute left-0 w-5 h-px bg-text-primary transition-all duration-300 origin-center ${
                    mobileOpen ? "top-[6px] -rotate-45" : "top-[12px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer + backdrop -- OUTSIDE nav to escape z-50 stacking context */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop -- covers everything including nav bar */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer -- slides in from left, covers full viewport height */}
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="md:hidden fixed top-0 left-0 bottom-0 w-[80vw] max-w-sm bg-bg z-[70] flex flex-col shadow-xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-border">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 font-display text-text-primary font-bold tracking-tight text-lg"
                >
                  <PlumeIcon className="h-5 w-5 text-accent flex-shrink-0" />
                  Plume Creative
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="relative w-8 h-8 flex items-center justify-center"
                >
                  <span className="absolute w-5 h-px bg-text-primary rotate-45" />
                  <span className="absolute w-5 h-px bg-text-primary -rotate-45" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 px-6 py-8 flex flex-col">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-4 text-2xl font-display tracking-wide transition-colors border-b border-border/40 ${
                        pathname === item.href || pathname.startsWith(item.href + "/")
                          ? "text-text-primary"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA at bottom of drawer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="px-6 pb-10"
              >
                <Link
                  href="/start"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-6 py-3.5 bg-accent text-white text-base font-medium tracking-wide rounded-sm hover:bg-accent-hover transition-colors duration-200"
                >
                  Start a Project
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
