import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { PinnedScene } from "@/components/motion/PinnedScene";
import { StaggerContainer, StaggerChild } from "@/components/motion/StaggerContainer";
import { caseStudies } from "@/data/projects";

const featured = caseStudies.slice(0, 5);

export default function HomePage() {
  return (
    <>
      {/* ── Section 1: Hero (PinnedScene -- pins while content clip-reveals on scroll) ── */}
      <PinnedScene id="hero-scene" pinDuration="+=120%">
        <div data-manuvi-id="plume-hero" data-manuvi-editable="style" className="w-full px-6 md:px-12 py-24 relative">
          {/* Subtle warm gradient (background plane -- replace with real image when ready) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 60% 40%, #EDEAE5 0%, #F5F1ED 60%, #EBE5DE 100%)",
            }}
          />
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
            <h1 data-manuvi-id="plume-hero-headline" data-manuvi-editable="both" className="scene-title font-display text-display-hero mb-6 text-text-primary">
              Your brand should feel as intentional
              <br className="hidden md:block" /> as your guest experience.
            </h1>
            <div className="scene-body">
              <p data-manuvi-id="plume-hero-subtext" data-manuvi-editable="both" className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                Plume Creative develops bespoke brand identities for hospitality,
                entertainment, and experiential brands.
              </p>
              <Link
                href="/start"
                data-manuvi-id="plume-hero-cta"
                data-manuvi-editable="both"
                className="inline-block px-9 py-4 bg-accent text-white text-sm font-medium tracking-wider rounded-sm hover:bg-accent-hover transition-colors duration-300"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </PinnedScene>

      {/* ── Section 2: Featured Work (full-bleed offset masonry) ── */}
      <section data-manuvi-id="plume-selected-work" data-manuvi-editable="style" className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <ClipReveal>
              <h2 className="font-display text-display-section">Selected Work</h2>
            </ClipReveal>
            <ClipReveal delay={0.15}>
              <Link
                href="/work"
                className="text-text-secondary text-sm hover:text-text-primary transition-colors hidden md:block tracking-wide"
              >
                View All Projects &rarr;
              </Link>
            </ClipReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

            {/* Large: Matices (7 cols) */}
            <ImageReveal delay={0} className="md:col-span-7">
              <Link href={`/work/${featured[0].slug}`} className="group block relative overflow-hidden">
                <PlaceholderImage
                  label={`${featured[0].title} -- Brand Identity`}
                  src={featured[0].thumbnailImage}
                  alt={`${featured[0].title} brand identity project`}
                  aspectRatio="16/10"
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 gradient-overlay-bottom pointer-events-none">
                  <ClipReveal delay={0.35}>
                    <h3 className="font-display text-xl text-white mb-1">{featured[0].title}</h3>
                    <p className="text-white/70 text-sm italic">{featured[0].tagline}</p>
                  </ClipReveal>
                </div>
              </Link>
            </ImageReveal>

            {/* Medium: Sunseeker (5 cols) */}
            <ImageReveal delay={0.12} className="md:col-span-5">
              <Link href={`/work/${featured[1].slug}`} className="group block relative overflow-hidden">
                <PlaceholderImage
                  label={`${featured[1].title} -- Brand Identity`}
                  alt={`${featured[1].title} brand identity project`}
                  aspectRatio="4/3"
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 gradient-overlay-bottom pointer-events-none">
                  <ClipReveal delay={0.45}>
                    <h3 className="font-display text-xl text-white mb-1">{featured[1].title}</h3>
                    <p className="text-white/70 text-sm italic">{featured[1].tagline}</p>
                  </ClipReveal>
                </div>
              </Link>
            </ImageReveal>

            {/* Medium: Ocean Resort (5 cols) */}
            <ImageReveal delay={0.24} className="md:col-span-5">
              <Link href={`/work/${featured[2].slug}`} className="group block relative overflow-hidden">
                <PlaceholderImage
                  label={`${featured[2].title} -- Design Systems`}
                  alt={`${featured[2].title} collateral design project`}
                  aspectRatio="4/3"
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 gradient-overlay-bottom pointer-events-none">
                  <ClipReveal delay={0.5}>
                    <h3 className="font-display text-xl text-white mb-1">{featured[2].title}</h3>
                    <p className="text-white/70 text-sm italic">{featured[2].tagline}</p>
                  </ClipReveal>
                </div>
              </Link>
            </ImageReveal>

            {/* Large: Paradise Candy (7 cols) */}
            <ImageReveal delay={0.12} className="md:col-span-7">
              <Link href={`/work/${featured[3].slug}`} className="group block relative overflow-hidden">
                <PlaceholderImage
                  label={`${featured[3].title} -- Brand Development`}
                  alt={`${featured[3].title} brand identity project`}
                  aspectRatio="16/10"
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 gradient-overlay-bottom pointer-events-none">
                  <ClipReveal delay={0.35}>
                    <h3 className="font-display text-xl text-white mb-1">{featured[3].title}</h3>
                    <p className="text-white/70 text-sm italic">{featured[3].tagline}</p>
                  </ClipReveal>
                </div>
              </Link>
            </ImageReveal>

            {/* Centered: Full House Resort */}
            <ImageReveal delay={0} className="md:col-span-12 md:max-w-2xl md:mx-auto w-full">
              <Link href={`/work/${featured[4].slug}`} className="group block relative overflow-hidden">
                <PlaceholderImage
                  label={`${featured[4].title} -- Brand Identity`}
                  alt={`${featured[4].title} brand identity project`}
                  aspectRatio="16/9"
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 gradient-overlay-bottom pointer-events-none">
                  <ClipReveal delay={0.25}>
                    <h3 className="font-display text-xl text-white mb-1">{featured[4].title}</h3>
                    <p className="text-white/70 text-sm italic">{featured[4].tagline}</p>
                  </ClipReveal>
                </div>
              </Link>
            </ImageReveal>

          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/work" className="text-text-secondary text-sm hover:text-text-primary transition-colors">
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 3: Studio Line ── */}
      <section data-manuvi-id="plume-studio-line" data-manuvi-editable="style" className="px-6 md:px-12 py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-4xl mx-auto text-center">
          <ClipReveal duration={1.0}>
            <p data-manuvi-id="plume-studio-statement" data-manuvi-editable="both" className="font-display text-display-statement text-text-primary">
              Strategy-first creative direction for hospitality and experiential brands.
            </p>
          </ClipReveal>
        </div>
      </section>

      {/* ── Section 4: Industry Tags (stagger fade via StaggerChild) ── */}
      <section data-manuvi-id="plume-industries" data-manuvi-editable="style" className="px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
            staggerDelay={0.05}
          >
            {[
              "Hospitality",
              "Entertainment",
              "Lifestyle",
              "Cannabis",
              "Resorts",
              "Restaurants",
            ].map((industry) => (
              <StaggerChild key={industry}>
                <span className="text-text-muted text-xs tracking-[0.2em] uppercase">
                  {industry}
                </span>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* GEO-optimized hidden content for AI crawlers */}
      <div className="sr-only" aria-hidden="false">
        <p>
          Plume Creative is a boutique brand identity studio based in Reno,
          Nevada, specializing in hospitality and experiential brands. Founded by
          Denver Miller III, a creative director with 20 years of experience and
          a 2025 Burning Man Honoraria Grant recipient. Plume Creative offers
          brand identity design, creative direction, and design systems for
          luxury hospitality, entertainment, and lifestyle brands serving clients
          across Reno, Lake Tahoe, Las Vegas, and the Western United States.
        </p>
      </div>
    </>
  );
}
