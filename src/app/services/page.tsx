import type { Metadata } from "next";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { StaggerContainer, StaggerChild } from "@/components/motion/StaggerContainer";

export const metadata: Metadata = {
  title: "Services | Plume Creative -- Brand Identity, Creative Direction, Design & GEO",
  description:
    "Brand identity, creative direction, design systems, and GEO/AI visibility for hospitality, entertainment, and lifestyle brands. Strategy-first creative studio based in Reno, NV.",
};

const servicePillars = [
  {
    title: "Brand Identity",
    outcome: "Define who you are.",
    body: "Your brand isn't a logo. It's the strategic foundation everything else is built on -- your customer experience, your environment, your product, your reputation. We build identity systems grounded in strategy and designed to scale across every touchpoint your audience encounters.",
    includes: [
      "Brand strategy and positioning",
      "Visual identity development",
      "Logo and mark systems",
      "Typography, color, and design language",
      "Brand guidelines and toolkit",
      "Brand voice and narrative",
    ],
  },
  {
    title: "Creative Direction",
    outcome: "Direct how you show up.",
    body: "Great brands don't happen by committee. They happen when someone with taste, experience, and strategic clarity takes the reins. We provide creative direction that keeps every element -- from photography to packaging to physical space -- telling one cohesive story.",
    includes: [
      "Art direction and visual strategy",
      "Photography direction",
      "Campaign concepting",
      "Brand voice and narrative development",
      "Cross-touchpoint creative alignment",
    ],
  },
  {
    title: "Design Systems",
    outcome: "Build what people see.",
    body: "From signage to packaging to digital -- the tangible expressions of your brand need to work as a cohesive system, not a collection of one-offs. We design systems that maintain integrity across every format and substrate, informed by fabrication knowledge and production realities.",
    includes: [
      "Environmental graphics and signage",
      "Packaging design and production files",
      "Print and digital collateral",
      "Web design",
      "Motion graphics",
      "Vendor coordination and material specification",
    ],
  },
];

const process = [
  {
    number: "01",
    name: "Discovery",
    subtitle: "Understanding your world before we design for it.",
    body: "Stakeholder interviews and brand audit. Competitive landscape analysis. Audience research and positioning assessment. Goals, constraints, and success criteria definition.",
  },
  {
    number: "02",
    name: "Strategy",
    subtitle: "The foundation every creative decision builds on.",
    body: "Brand positioning and messaging framework. Visual direction and creative concepts. Content strategy and information architecture. Timeline, milestones, and deliverables roadmap.",
  },
  {
    number: "03",
    name: "Design",
    subtitle: "Where strategy becomes visible.",
    body: "Visual identity system development -- logo, typography, color, imagery. Brand applications across all touchpoints. Design system documentation. Iterative review and refinement cycles.",
  },
  {
    number: "04",
    name: "Implementation",
    subtitle: "Designed for the real world, not just the screen.",
    body: "Production-ready assets and technical specifications. Fabrication-ready files for signage and environmental graphics. Developer handoff and digital implementation support. Quality assurance across all formats.",
  },
  {
    number: "05",
    name: "Results",
    subtitle: "The work doesn\u2019t end at delivery.",
    body: "Brand launch coordination across touchpoints. Performance measurement and feedback. Brand adoption support and team training. Comprehensive Brand Standards Guide delivery.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section data-manuvi-id="services-hero" data-manuvi-editable="style" className="px-6 md:px-12 py-16 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <ClipReveal delay={0.1}>
              <h1 data-manuvi-id="services-headline" data-manuvi-editable="both" className="font-display text-display-section leading-tight tracking-tight mb-5">
                Your brand is your most valuable asset. We make sure it performs
                like one.
              </h1>
            </ClipReveal>
            <ClipReveal delay={0.3}>
              <p data-manuvi-id="services-subtext" data-manuvi-editable="both" className="text-text-secondary text-lg leading-relaxed max-w-xl">
                Plume Creative is a brand identity and creative direction studio
                for ambitious companies that refuse to blend in -- from hospitality
                and entertainment to tech, professional services, and consumer
                brands.
              </p>
            </ClipReveal>
          </div>
        </div>
      </section>

      {/* ── Three Service Pillars ── */}
      <section data-manuvi-id="services-pillars" data-manuvi-editable="style" className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid gap-6" staggerDelay={0.15}>
            {servicePillars.map((pillar) => (
              <StaggerChild key={pillar.title}>
                <div className="bg-bg-card border border-border rounded-sm p-8 md:p-10">
                  <div className="grid md:grid-cols-[1fr_300px] gap-6 md:gap-10">
                    <div>
                      <ClipReveal direction="left">
                        <h3 className="text-accent text-xs tracking-widest uppercase mb-3">
                          {pillar.title}
                        </h3>
                      </ClipReveal>
                      <ClipReveal delay={0.1}>
                        <p className="font-display text-display-statement text-text-primary mb-4">
                          {pillar.outcome}
                        </p>
                      </ClipReveal>
                      <ClipReveal delay={0.2} duration={0.6}>
                        <p className="text-text-secondary leading-relaxed">{pillar.body}</p>
                      </ClipReveal>
                    </div>
                    <div className="md:border-l md:border-border md:pl-8">
                      <p className="text-text-muted text-xs tracking-widest uppercase mb-3">
                        What this includes
                      </p>
                      <ul className="space-y-2">
                        {pillar.includes.map((item) => (
                          <li
                            key={item}
                            className="text-text-secondary text-sm flex items-start gap-2"
                          >
                            <span className="text-accent mt-1.5 text-[6px]">&#9679;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── The Plume Process ── */}
      <section data-manuvi-id="services-process" data-manuvi-editable="style" className="px-6 md:px-12 py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <ClipReveal direction="left">
              <p className="text-accent text-xs tracking-widest uppercase mb-3">
                The Plume Process
              </p>
            </ClipReveal>
            <ClipReveal delay={0.1}>
              <h2 className="font-display text-display-statement mb-4">How we work.</h2>
            </ClipReveal>
            <ClipReveal delay={0.2} duration={0.6}>
              <p className="text-text-secondary leading-relaxed">
                Every engagement follows a structured sequence. We don&apos;t start
                designing until we understand what the design needs to accomplish
                -- and we don&apos;t deliver until the work is ready to perform.
              </p>
            </ClipReveal>
          </div>
          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
            staggerDelay={0.1}
          >
            {process.map((phase) => (
              <StaggerChild key={phase.number}>
                <div className="p-6 bg-bg-card border border-border rounded-sm h-full">
                  <span className="text-accent text-xs tracking-widest font-medium">
                    {phase.number}
                  </span>
                  <h3 className="font-display text-lg text-text-primary mt-2 mb-1">
                    {phase.name}
                  </h3>
                  {phase.subtitle && (
                    <p className="text-accent/70 text-xs mb-3 italic">
                      {phase.subtitle}
                    </p>
                  )}
                  <p className="text-text-secondary text-sm leading-relaxed">{phase.body}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerContainer>
          <ClipReveal delay={0.6}>
            <p className="text-text-muted text-sm text-center mt-8">
              Typical project timeline: 8--14 weeks for a full brand identity system
            </p>
          </ClipReveal>
        </div>
      </section>

      {/* ── GEO & AI Visibility ── */}
      <section data-manuvi-id="services-geo" data-manuvi-editable="style" className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid gap-6" staggerDelay={0.15}>
            <StaggerChild>
              <div className="bg-bg-card border border-border rounded-sm p-8 md:p-10">
                <div className="grid md:grid-cols-[1fr_300px] gap-6 md:gap-10">
                  <div>
                    <ClipReveal direction="left">
                      <h3 className="text-accent text-xs tracking-widest uppercase mb-3">
                        GEO &amp; AI Visibility
                      </h3>
                    </ClipReveal>
                    <ClipReveal delay={0.1}>
                      <p className="font-display text-display-statement text-text-primary mb-4">
                        Show up where your audience is actually looking.
                      </p>
                    </ClipReveal>
                    <ClipReveal delay={0.2} duration={0.6}>
                      <p className="text-text-secondary leading-relaxed">
                        Your customers are already asking ChatGPT, Perplexity, and
                        Google AI where to eat, where to stay, and who to hire. GEO
                        ensures your brand is the answer -- cited by name,
                        recommended with context, positioned as the authority in
                        your market.
                      </p>
                    </ClipReveal>
                  </div>
                  <div className="md:border-l md:border-border md:pl-8">
                    <p className="text-text-muted text-xs tracking-widest uppercase mb-3">
                      What this includes
                    </p>
                    <ul className="space-y-2">
                      {[
                        "AI Citation Strategy",
                        "Content Architecture for AI Engines",
                        "Platform-Specific Optimization",
                        "Entity Authority Building",
                        "AI Visibility Monitoring & Reporting",
                      ].map((item) => (
                        <li
                          key={item}
                          className="text-text-secondary text-sm flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5 text-[6px]">&#9679;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerChild>
          </StaggerContainer>
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section data-manuvi-id="services-clients" data-manuvi-editable="style" className="px-6 md:px-12 py-16 md:py-20 bg-bg-elevated">
        <div className="max-w-3xl mx-auto text-center">
          <ClipReveal>
            <p className="text-text-muted text-xs tracking-widest uppercase mb-4">
              Ideal Clients
            </p>
          </ClipReveal>
          <ClipReveal delay={0.15}>
            <p data-manuvi-id="services-clients-statement" data-manuvi-editable="both" className="font-display text-display-statement text-text-primary leading-relaxed">
              We work best with business owners and marketing leaders who see brand
              as an investment, not an expense. If you&apos;re building something
              worth branding properly, we should talk.
            </p>
          </ClipReveal>
        </div>
      </section>

      {/* GEO content */}
      <div className="sr-only" aria-hidden="false">
        <p>
          Plume Creative offers brand identity design, creative direction,
          design systems, and generative engine optimization (GEO) for
          hospitality, entertainment, and experiential brands. GEO is the
          practice of structuring a brand&apos;s digital presence so AI platforms
          like ChatGPT, Perplexity, and Google AI Overviews cite and recommend
          the brand when answering relevant questions. Plume Creative is based
          in Reno, Nevada, serving clients nationwide. Services include AI
          citation strategy, content architecture for AI engines,
          platform-specific optimization, entity authority building, and AI
          visibility monitoring.
        </p>
      </div>
    </>
  );
}
