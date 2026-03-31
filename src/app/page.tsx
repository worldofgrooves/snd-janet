import Link from "next/link";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { PinnedScene } from "@/components/motion/PinnedScene";
import { StaggerContainer, StaggerChild } from "@/components/motion/StaggerContainer";
import { WorkScrollCard } from "@/components/motion/WorkScrollCard";
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
            <WorkScrollCard
              href={`/work/${featured[0].slug}`}
              title={featured[0].title}
              tagline={featured[0].tagline}
              year={featured[0].year}
              thumbnailImage={featured[0].thumbnailImage}
              imageAlt={`${featured[0].title} brand identity project`}
              aspectRatio="16/10"
              className="md:col-span-7"
            />

            {/* Medium: Sunseeker (5 cols) */}
            <WorkScrollCard
              href={`/work/${featured[1].slug}`}
              title={featured[1].title}
              tagline={featured[1].tagline}
              year={featured[1].year}
              thumbnailImage={featured[1].thumbnailImage}
              imageAlt={`${featured[1].title} brand identity project`}
              aspectRatio="4/3"
              className="md:col-span-5"
            />

            {/* Medium: Ocean Resort (5 cols) */}
            <WorkScrollCard
              href={`/work/${featured[2].slug}`}
              title={featured[2].title}
              tagline={featured[2].tagline}
              year={featured[2].year}
              thumbnailImage={featured[2].thumbnailImage}
              imageAlt={`${featured[2].title} collateral design project`}
              aspectRatio="4/3"
              className="md:col-span-5"
            />

            {/* Large: Paradise Candy (7 cols) */}
            <WorkScrollCard
              href={`/work/${featured[3].slug}`}
              title={featured[3].title}
              tagline={featured[3].tagline}
              year={featured[3].year}
              thumbnailImage={featured[3].thumbnailImage}
              imageAlt={`${featured[3].title} brand identity project`}
              aspectRatio="16/10"
              className="md:col-span-7"
            />

            {/* Centered: Full House Resort */}
            <WorkScrollCard
              href={`/work/${featured[4].slug}`}
              title={featured[4].title}
              tagline={featured[4].tagline}
              year={featured[4].year}
              thumbnailImage={featured[4].thumbnailImage}
              imageAlt={`${featured[4].title} brand identity project`}
              aspectRatio="16/9"
              className="md:col-span-12 md:max-w-2xl md:mx-auto w-full"
            />

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

      {/* ── Section 4: Testimonials ── */}
      <section data-manuvi-id="plume-testimonials" data-manuvi-editable="style" className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <ClipReveal direction="left">
            <p className="text-accent text-xs tracking-widest uppercase mb-10 text-center">
              What They Say
            </p>
          </ClipReveal>
          <div className="space-y-10">
            {[
              {
                quote:
                  "Denver is a creative force. His thoughtful approach to creative development, collaboration and team building are evidenced by his body of work and lasting relationships. He has the unique ability to apply those methods of thinking outside their respective disciplines to yield innovative creative solutions.",
                name: "Alexandra Smith",
                title: "Design Director, MGM Resorts International",
              },
              {
                quote:
                  "He is an artistic talent that will add to the creativity of any job thrown his way. He has a thirst for this creative world, and is always asking questions or coming up with solutions to push visual and concept driven boundaries.",
                name: "Steve Averitt",
                title: "Owner & Creative Director, Averitt Creative",
              },
              {
                quote:
                  "Denver is not only one of the most creative people I\u2019ve worked with, he is also one of the most authentic and enthusiastic creatives in the industry. His versatility is evident when you see his art, listen to his music, browse his portfolio or just engage in a conversation.",
                name: "EJ Luera",
                title: "Owner, Feature Sneaker Boutique",
              },
            ].map((testimonial, i) => (
              <ClipReveal key={testimonial.name} delay={i * 0.1}>
                <blockquote className="border-l-2 border-accent/30 pl-6">
                  <p className="text-text-secondary text-lg leading-relaxed italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer>
                    <p className="text-text-primary text-sm font-medium">
                      {testimonial.name}
                    </p>
                    <p className="text-text-muted text-xs">
                      {testimonial.title}
                    </p>
                  </footer>
                </blockquote>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Industry Tags (stagger fade via StaggerChild) ── */}
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
