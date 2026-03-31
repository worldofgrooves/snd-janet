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
  "20+ years in design and creative direction",
  "Former creative roles at MGM Resorts International and Wynn Las Vegas",
  "Brand systems for hospitality, entertainment, resort, and lifestyle brands",
  "2025 Burning Man Honoraria Grant recipient (large-scale installation)",
  "Wynn Las Vegas Feature Gallery artist",
  "Solo exhibition at The Midway San Francisco",
  "Fabrication expertise: CNC, laser cutting, 3D printing, metalwork",
  "Based in Reno, Nevada -- 45 minutes from Lake Tahoe",
];

const qualifications = [
  { label: "Business Entity", value: "World of Grooves LLC (DBA Plume Creative)" },
  { label: "Location", value: "Reno, Nevada" },
  { label: "Structure", value: "Principal-led studio with specialized contractor network" },
  { label: "Principal", value: "Denver Miller III, Creative Director & Founder" },
  { label: "Insurance", value: "Professional liability insurance maintained" },
  { label: "Recognition", value: "Burning Man Honoraria Grant, gallery exhibitions, 80+ projects" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero: Portrait + Headline ── */}
      <section data-manuvi-id="about-hero" data-manuvi-editable="style" className="px-6 md:px-12 py-16 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <ClipReveal delay={0.1}>
                <h1 data-manuvi-id="about-headline" data-manuvi-editable="both" className="font-display text-display-section leading-tight tracking-tight mb-5">
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
      <section data-manuvi-id="about-studio" data-manuvi-editable="style" className="px-6 md:px-12 py-14 md:py-20 bg-bg-elevated">
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
      <section data-manuvi-id="about-director" data-manuvi-editable="style" className="px-6 md:px-12 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <ClipReveal direction="left">
            <h2 className="text-accent text-xs tracking-widest uppercase mb-6">
              The Creative Director
            </h2>
          </ClipReveal>
          <div className="space-y-5 text-text-secondary text-lg leading-relaxed">
            {[
              "Denver Miller brings over 20 years of creative direction experience to every engagement -- with a career spanning luxury hospitality, entertainment, resort, and lifestyle brands.",
              "His professional background includes creative roles at MGM Resorts International and Wynn Las Vegas, where he developed brand systems and creative work for two of the world\u2019s most recognized hospitality organizations. That experience built an intimate understanding of how brand identity operates across large-scale, multi-venue properties serving diverse public audiences.",
              "Denver is also a practicing fine artist. His large-scale vinyl record sculptures have been exhibited at Wynn Las Vegas and The Midway San Francisco, and he received a 2025 Burning Man Honoraria Grant for Echo of Emergence -- a monumental 6.5-foot installation on the playa. This dual practice as artist and creative director brings a depth of visual sensibility that pure commercial designers rarely achieve.",
              "That dual lens -- commercial strategy and artistic sensibility -- runs through everything Plume Creative produces. It means the work isn\u2019t just on-brand and on-strategy. It has a quality that\u2019s harder to name but impossible to miss: taste, restraint, and the confidence to let a strong idea breathe.",
              "His fabrication background -- CNC routing, laser cutting, 3D printing, metalwork -- means he approaches environmental graphics, signage, and physical brand applications with production knowledge, not just screen aesthetics. When Plume designs a sign system, the specifications are grounded in material reality.",
            ].map((paragraph, i) => (
              <ClipReveal key={i} delay={i * 0.08} duration={0.6}>
                <p>{paragraph}</p>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Creative Network ── */}
      <section data-manuvi-id="about-network" data-manuvi-editable="style" className="px-6 md:px-12 py-14 md:py-20 bg-bg-elevated">
        <div className="max-w-3xl mx-auto text-center">
          <ClipReveal>
            <h2 data-manuvi-id="about-network-headline" data-manuvi-editable="both" className="font-display text-display-statement text-text-primary mb-4">
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
      <section data-manuvi-id="about-beliefs" data-manuvi-editable="style" className="px-6 md:px-12 py-14 md:py-20">
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
      <section data-manuvi-id="about-credentials" data-manuvi-editable="style" className="px-6 md:px-12 py-14 md:py-20 bg-bg-elevated">
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

      {/* ── Company Qualifications ── */}
      <section data-manuvi-id="about-qualifications" data-manuvi-editable="style" className="px-6 md:px-12 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <ClipReveal direction="left">
            <h2 className="text-accent text-xs tracking-widest uppercase mb-8">
              Company Qualifications
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.1} duration={0.6}>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Plume Creative operates under World of Grooves LLC, a Nevada-based
              creative studio founded and led by Denver Miller. We maintain the
              agility and personal attention of a boutique practice with the
              professional standards of a structured firm.
            </p>
          </ClipReveal>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.07}>
            {qualifications.map((q) => (
              <StaggerChild key={q.label}>
                <div className="p-4 bg-bg-card border border-border rounded-sm">
                  <p className="text-text-muted text-xs tracking-widest uppercase mb-1">
                    {q.label}
                  </p>
                  <p className="text-text-primary text-sm">{q.value}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerContainer>
          <ClipReveal delay={0.3} duration={0.6}>
            <p className="text-text-secondary text-sm leading-relaxed mt-6">
              Denver leads all strategic and creative work personally, supported
              by a vetted network of specialized contractors in visual systems,
              web development, SEO/digital strategy, content, and project
              operations. Every engagement follows a formalized process:
              documented contracts, defined scopes, milestone-based deliverables,
              and professional project management.
            </p>
          </ClipReveal>
        </div>
      </section>

      {/* ── Built for Destination Brands ── */}
      <section data-manuvi-id="about-destination" data-manuvi-editable="style" className="px-6 md:px-12 py-14 md:py-20 bg-bg-elevated">
        <div className="max-w-3xl mx-auto">
          <ClipReveal direction="left">
            <h2 className="text-accent text-xs tracking-widest uppercase mb-6">
              Our Niche
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.1}>
            <h3 className="font-display text-display-statement text-text-primary mb-6">
              Built for Destination Brands
            </h3>
          </ClipReveal>
          <div className="space-y-5 text-text-secondary text-lg leading-relaxed">
            {[
              "Plume Creative specializes in visual strategy for destination brands and public-facing organizations -- the places where brand quality directly affects visitor experience, community perception, and revenue.",
              "Our experience with luxury hospitality venues like Wynn Las Vegas and MGM Resorts taught us how brand systems operate at scale: across multiple venues, diverse audiences, and dozens of physical and digital touchpoints. We understand stakeholder management, the complexity of serving both residents and visitors, and the discipline required to maintain brand consistency when dozens of departments and venues need to stay aligned.",
              "For resort destinations, hospitality districts, and civic organizations managing recreation and public amenities, we bring a rare combination: the strategic rigor of an agency, the creative craft of an artist-led studio, and the accessibility of a Nevada-based partner who can be in the room when it matters.",
            ].map((paragraph, i) => (
              <ClipReveal key={i} delay={0.15 + i * 0.08} duration={0.6}>
                <p>{paragraph}</p>
              </ClipReveal>
            ))}
          </div>
          <ClipReveal delay={0.5}>
            <div className="mt-8 p-4 bg-bg-card border border-border rounded-sm inline-block">
              <p className="text-text-primary text-sm font-medium">
                Reno, NV -- 45 minutes from Incline Village.
              </p>
              <p className="text-text-secondary text-sm">
                Available for in-person collaboration, site visits, and board
                meetings.
              </p>
            </div>
          </ClipReveal>
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
          United States. Former creative professional at MGM Resorts
          International and Wynn Las Vegas. 2025 Burning Man Honoraria Grant
          recipient. Plume Creative serves destination brands, hospitality
          groups, resort properties, and civic organizations managing public
          recreation amenities.
        </p>
      </div>
    </>
  );
}
