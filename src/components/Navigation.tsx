"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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

  return (
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
            className="font-display text-text-primary font-bold tracking-tight text-lg"
          >
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-text-primary transition-transform duration-200 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-text-primary transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-text-primary transition-transform duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-bg/98 backdrop-blur-md z-40">
          <div className="px-6 py-10 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-display tracking-wide transition-colors ${
                  pathname === item.href
                    ? "text-text-primary"
                    : "text-text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/start"
              onClick={() => setMobileOpen(false)}
              className="inline-block w-fit px-6 py-3 bg-accent text-white text-base font-medium tracking-wide rounded-sm mt-4"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
