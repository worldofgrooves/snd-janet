import Link from "next/link";
import PlumeIcon from "@/components/PlumeIcon";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <PlumeIcon className="h-6 w-6 text-accent flex-shrink-0" />
              <h3 className="font-display text-text-primary font-bold text-lg">
                Plume Creative
              </h3>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Strategic brand identity and creative direction for brands that
              take themselves seriously.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-text-muted text-xs tracking-widest uppercase mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/work", label: "Work" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-muted text-xs tracking-widest uppercase mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-2 text-sm text-text-secondary">
              <a
                href="mailto:denver@madebyplume.com"
                className="hover:text-text-primary transition-colors"
              >
                denver@madebyplume.com
              </a>
              <span>Reno, Nevada</span>
            </div>
            <div className="flex gap-4 mt-4">
              {["Instagram", "LinkedIn"].map((s) => (
                <span
                  key={s}
                  className="text-xs text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA + Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Link
                href="/start"
                className="inline-block px-6 py-2.5 bg-accent text-white text-sm font-medium tracking-wide rounded-sm hover:bg-accent-hover transition-colors duration-200"
              >
                Start a Project
              </Link>
              <span className="text-text-muted text-xs hidden md:inline">
                We work with brands investing $10K+ in their identity.
              </span>
            </div>
            <p className="text-text-muted text-xs">
              &copy; {new Date().getFullYear()} Plume Creative. All rights
              reserved. &middot; Reno, NV
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
