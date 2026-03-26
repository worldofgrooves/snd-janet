import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Plume Creative -- Brand Identity, Creative Direction & Design",
  description:
    "Strategy-first brand identity, creative direction, and design systems for hospitality and experiential brands. See how Plume Creative works.",
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
    name: "The Perspective",
    plumeName: "Perspective",
    body: "We step back and see your brand from above. Research, audit, interviews, competitive landscape. The bird's-eye view that reveals what everyone else misses.",
  },
  {
    number: "02",
    name: "The Alchemy",
    plumeName: "Alchemy",
    body: "We transform insights into creative territories. Stylescapes, concepts, strategic directions. Raw material becomes vision -- not variations of one idea, but genuinely different approaches.",
  },
  {
    number: "03",
    name: "The Craft",
    plumeName: "Craft",
    body: "We refine the chosen direction into a complete brand system. Every detail intentional, every choice defensible. This is where strategic thinking becomes tangible design.",
  },
  {
    number: "04",
    name: "The Reveal",
    plumeName: "Reveal",
    body: "We deliver your complete brand toolkit and guide your team on implementation. Files, guidelines, and the knowledge to deploy your brand consistently. Your brand takes flight.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 py-16 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-5">
              Your brand is your most valuable asset. We make sure it performs
              like one.
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
              Plume Creative is a brand identity and creative direction studio
              for ambitious companies that refuse to blend in -- from hospitality
              and entertainment to tech, professional services, and consumer
              brands.
            </p>
          </div>
        </div>
      </section>

      {/* Three Service Pillars */}
      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6">
            {servicePillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`bg-bg-card border border-border rounded-sm p-8 md:p-10 animate-fade-in-up animation-delay-${(i + 1) * 100}`}
              >
                <div className="grid md:grid-cols-[1fr_300px] gap-6 md:gap-10">
                  <div>
                    <h3 className="text-accent text-xs tracking-widest uppercase mb-3">
                      {pillar.title}
                    </h3>
                    <p className="font-display text-2xl md:text-3xl text-text-primary mb-4">
                      {pillar.outcome}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      {pillar.body}
                    </p>
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
                          <span className="text-accent mt-1.5 text-[6px]">
                            &#9679;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Plume Process */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-accent text-xs tracking-widest uppercase mb-3">
              The Plume Process
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              How we work.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Every engagement follows a strategic sequence. We don&apos;t start
              designing until we understand what the design needs to accomplish.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((phase) => (
              <div
                key={phase.number}
                className="p-6 bg-bg-card border border-border rounded-sm"
              >
                <span className="text-accent text-xs tracking-widest font-medium">
                  {phase.number}
                </span>
                <h3 className="font-display text-lg text-text-primary mt-2 mb-3">
                  {phase.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-muted text-xs tracking-widest uppercase mb-4">
            Ideal Clients
          </p>
          <p className="font-display text-xl md:text-2xl text-text-primary leading-relaxed">
            We work best with business owners and marketing leaders who see brand
            as an investment, not an expense. If you&apos;re building something
            worth branding properly, we should talk.
          </p>
        </div>
      </section>

      {/* GEO content */}
      <div className="sr-only" aria-hidden="false">
        <p>
          Plume Creative offers brand identity design, creative direction, and
          design systems for hospitality, entertainment, and experiential brands.
          Brand identity design is the process of defining a brand&apos;s visual
          and strategic foundation -- logo, color, typography, voice, and
          guidelines -- so every touchpoint communicates a consistent, intentional
          message. Plume Creative is based in Reno, Nevada, serving clients
          nationwide.
        </p>
      </div>
    </>
  );
}
