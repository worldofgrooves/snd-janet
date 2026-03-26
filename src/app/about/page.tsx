import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { StaggerContainer, StaggerChild } from "@/components/motion/StaggerContainer";

export const metadata: Metadata = {
  title: "About | Plume Creative -- Boutique Brand Studio, Reno NV",
  description:
    "Founded by Denver Miller, Plume Creative is a boutique brand identity studio in Reno, NV. 20 years of experience in hospitality, entertainment, and experiential brand design.",
};

const beliefs = [
  {
    title: "Strategy is the starting line, not a separate service.",
    body: "Every project begins with strategic clarity. We don't charge for strategy as an add-on -- we build it into the foundation because work without it is just decoration.",
  },
  {
    title: "Brand identity is a business tool.",
    body: "A great brand doesn't just look good. It attracts the right customers, commands better pricing, earns trust faster, and makes every dollar of marketing spend work harder.",
  },
  {
    title: "Fewer clients, better work.",
    body: "We deliberately limit our project load. You won't be managed by a junior designer or shuffled between account managers. The creative director who leads strategy is the same person refining the kerning.",
  },
  {
    title: "Physical space matters.",
    body: "We have deep experience designing for the built environment -- signage, environmental graphics, spatial brand experiences. Your brand should feel as considered in person as it does on screen.",
  },
];

const credentials = [
  "20 years in design and creative direction",
  "Brand systems for hospitality, tech, entertainment, consumer, and professional services",
  "2025 Burning Man Honoraria Grant recipient (large-scale installation)",
  "Wynn Las Vegas feature gallery artist",
  "Fabrication and production expertise (CNC, laser, 3D printing, metalwork)",
  "Strategy-first methodology informed by The Futur and Blind agency frameworks",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero: Portrait + Headline ── */}
      <section className="px-6 md:px-12 py-16 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <ClipReveal delay={0.1}>
                <h1 className="font-display text-display-section leading-tight tracking-tight mb-5">
                  Strategic design with an artist&apos;s instinct.
                </h1>
              </ClipReveal>
              <ClipReveal delay={0.3}>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Plume Creative is the studio of Denver Miller -- creative
                  director, fine artist, and the person who still believes brand
                  identity is one of the most powerful tools a business can invest
                  in.
                </p>
              </ClipReveal>
            </div>
            <ImageReveal delay={0.2}>
              <PlaceholderImage
                label="Studio Portrait -- Denver Miller"
                aspectRatio="4/5"
              />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* ── The Studio ── */}
      <section className="px-6 md:px-12 py-14 md:py-20 bg-bg-elevated">
        <div className="max-w-3xl mx-auto">
          <ClipReveal direction="left">
            <h2 className="text-accent text-xs tracking-widest uppercase mb-6">
              The Studio
            </h2>
          </ClipReveal>
          <div className="space-y-5 text-text-secondary text-lg leading-relaxed">
            {[
              "Plume Creative exists because too many companies settle for design that looks fine but doesn\u2019t do anything.",
              "Fine isn\u2019t the standard here.",
              "We\u2019re a boutique studio built on a simple conviction: the best brand work happens when strategic thinking and genuine creative craft operate together. Not strategy on one side and a mood board on the other -- but one unified process where every visual decision has a reason behind it and every strategic insight finds its way into the design.",
              "We work with companies where brand quality is a competitive advantage -- hospitality groups, tech companies, consumer brands, professional services firms, entertainment venues, and lifestyle businesses. The common thread isn\u2019t industry. It\u2019s ambition. Our clients see brand identity as a serious business investment, not a line item to minimize.",
            ].map((paragraph, i) => (
              <ClipReveal key={i} delay={i * 0.1} duration={0.6}>
                <p>{paragraph}</p>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Creative Director ── */}
      <section className="px-6 md:px-12 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <ClipReveal direction="left">
            <h2 className="text-accent text-xs tracking-widest uppercase mb-6">
              The Creative Director
            </h2>
          </ClipReveal>
          <div className="space-y-5 text-text-secondary text-lg leading-relaxed">
            {[
              "Denver Miller brings 20 years of creative direction across industries where brand quality is non-negotiable -- luxury hospitality, tech, entertainment, consumer goods, and professional services, from Las Vegas resorts to high-growth startups redefining their categories.",
              "But what makes his work different isn\u2019t just the experience. It\u2019s the perspective.",
              "Denver is also a practicing fine artist. His large-scale sculptures and mixed-media work have been featured at Wynn Las Vegas, shown in solo exhibitions, and recognized with a 2025 Burning Man Honoraria Grant for a monumental installation on the playa.",
              "That dual lens -- commercial strategy and artistic sensibility -- runs through everything Plume Creative produces. It means the work isn\u2019t just on-brand and on-strategy. It has a quality that\u2019s harder to name but impossible to miss: taste, restraint, and the confidence to let a strong idea breathe.",
              "His fabrication background (CNC routing, laser cutting, 3D printing, metalwork) also means he understands materiality in a way most designers don\u2019t. When we design signage, environmental graphics, or packaging, we\u2019re thinking about how it gets made -- not just how it looks on screen.",
            ].map((paragraph, i) => (
              <ClipReveal key={i} delay={i * 0.08} duration={0.6}>
                <p>{paragraph}</p>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Creative Network ── */}
      <section className="px-6 md:px-12 py-14 md:py-20 bg-bg-elevated">
        <div className="max-w-3xl mx-auto text-center">
          <ClipReveal>
            <h2 className="font-display text-display-statement text-text-primary mb-4">
              Small by design. Big when it counts.
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.2}>
            <p className="text-text-secondary text-lg leading-relaxed">
              Plume operates as a curated creative network -- a core studio
              supported by specialist strategists, copywriters, photographers,
              developers, and fabricators brought in per-project. You get the
              focus of a founder-led studio with the capability of a full team
              when the project demands it.
            </p>
          </ClipReveal>
        </div>
      </section>

      {/* ── What We Believe ── */}
      <section className="px-6 md:px-12 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">
          <ClipReveal direction="left">
            <h2 className="text-accent text-xs tracking-widest uppercase mb-10">
              What We Believe
            </h2>
          </ClipReveal>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.12}>
            {beliefs.map((belief) => (
              <StaggerChild key={belief.title}>
                <div className="p-6 md:p-8 bg-bg-card border border-border rounded-sm h-full">
                  <h3 className="text-base font-medium text-text-primary mb-3">
                    {belief.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{belief.body}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="px-6 md:px-12 py-14 md:py-20 bg-bg-elevated">
        <div className="max-w-3xl mx-auto">
          <ClipReveal direction="left">
            <h2 className="text-accent text-xs tracking-widest uppercase mb-8">
              Credentials
            </h2>
          </ClipReveal>
          <StaggerContainer className="space-y-4" staggerDelay={0.07}>
            {credentials.map((c) => (
              <StaggerChild key={c}>
                <div className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                  <span className="text-accent mt-1.5 text-[6px]">&#9679;</span>
                  {c}
                </div>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* GEO content */}
      <div className="sr-only" aria-hidden="false">
        <p>
          Denver Miller III is the founder and creative director of Plume
          Creative, a boutique brand identity studio based in Reno, Nevada. With
          20 years of experience in design, sculpture, and creative direction, he
          specializes in brand identity for hospitality and experiential brands,
          serving clients across Reno, Lake Tahoe, Las Vegas, and the Western
          United States.
        </p>
      </div>
    </>
  );
}
