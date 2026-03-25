import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionCTA from "@/components/SectionCTA";
import { projects } from "@/data/projects";

const services = [
  { title: "Brand Identity Systems", desc: "Strategic foundations that scale across every touchpoint." },
  { title: "Creative Direction", desc: "The creative leadership your project deserves." },
  { title: "Environmental Graphics", desc: "Your space should speak before anyone says a word." },
  { title: "Packaging Design", desc: "Packaging that earns its place on the shelf and in the hand." },
  { title: "Web Design", desc: "A digital presence that matches what you've built in person." },
  { title: "Print + Digital", desc: "Every touchpoint is a brand moment. We treat it like one." },
];

const credentials = [
  "20 Years in Design",
  "Luxury Hospitality Portfolio",
  "2025 Burning Man Honoraria Grant",
  "Wynn Las Vegas Featured Artist",
  "Fabrication Expertise",
  "Strategy-First Methodology",
];

export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-6 md:px-12 py-20 md:py-32 relative overflow-hidden">
        {/* Decorative plume motif */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[500px] lg:w-[600px] h-[600px] md:h-[800px] pointer-events-none select-none opacity-[0.06]">
          <svg viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Abstract feather / plume form */}
            <path
              d="M200 50 Q220 200 300 350 Q340 420 320 500 Q300 580 250 650 Q220 700 200 750"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-accent"
              fill="none"
            />
            <path
              d="M200 50 Q180 200 100 350 Q60 420 80 500 Q100 580 150 650 Q180 700 200 750"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-accent"
              fill="none"
            />
            {/* Inner vein lines */}
            <path d="M200 100 Q230 250 280 380" stroke="currentColor" strokeWidth="0.75" className="text-accent" fill="none" opacity="0.6" />
            <path d="M200 100 Q170 250 120 380" stroke="currentColor" strokeWidth="0.75" className="text-accent" fill="none" opacity="0.6" />
            <path d="M200 200 Q240 320 290 430" stroke="currentColor" strokeWidth="0.75" className="text-accent" fill="none" opacity="0.5" />
            <path d="M200 200 Q160 320 110 430" stroke="currentColor" strokeWidth="0.75" className="text-accent" fill="none" opacity="0.5" />
            <path d="M200 300 Q250 400 300 480" stroke="currentColor" strokeWidth="0.75" className="text-accent" fill="none" opacity="0.4" />
            <path d="M200 300 Q150 400 100 480" stroke="currentColor" strokeWidth="0.75" className="text-accent" fill="none" opacity="0.4" />
            {/* Central spine */}
            <path d="M200 50 L200 750" stroke="currentColor" strokeWidth="1" className="text-accent" fill="none" opacity="0.3" />
            {/* Subtle barb details */}
            <path d="M200 150 Q245 220 270 300" stroke="currentColor" strokeWidth="0.5" className="text-accent" fill="none" opacity="0.3" />
            <path d="M200 150 Q155 220 130 300" stroke="currentColor" strokeWidth="0.5" className="text-accent" fill="none" opacity="0.3" />
            <path d="M200 400 Q260 450 310 490" stroke="currentColor" strokeWidth="0.5" className="text-accent" fill="none" opacity="0.3" />
            <path d="M200 400 Q140 450 90 490" stroke="currentColor" strokeWidth="0.5" className="text-accent" fill="none" opacity="0.3" />
            <path d="M200 500 Q250 550 280 600" stroke="currentColor" strokeWidth="0.5" className="text-accent" fill="none" opacity="0.25" />
            <path d="M200 500 Q150 550 120 600" stroke="currentColor" strokeWidth="0.5" className="text-accent" fill="none" opacity="0.25" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in-up">
              <p className="text-accent text-sm tracking-widest uppercase mb-6">
                Brand Identity & Creative Direction
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight mb-6">
                Brands built with
                <br />
                strategy and soul.
              </h1>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mb-10">
                Plume Creative is a boutique studio for brands that refuse to blend in. We combine 20 years of creative direction with a fine artist&apos;s instinct to build identities that work as hard as you do.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/work"
                  className="inline-block px-8 py-3.5 bg-text-primary text-bg text-sm font-medium tracking-wide rounded-sm hover:bg-accent transition-colors duration-200"
                >
                  View Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3.5 border border-border text-text-primary text-sm font-medium tracking-wide rounded-sm hover:border-text-secondary transition-colors duration-200"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
            <div className="hidden md:block animate-fade-in-up animation-delay-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/home-hero-studio.jpeg"
                alt="Plume Creative Studio"
                className="w-full rounded-sm object-cover shadow-2xl"
                style={{ aspectRatio: "3/2" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-accent text-xs tracking-widest uppercase mb-3">Selected Projects</p>
              <h2 className="text-3xl md:text-4xl font-semibold">Featured Work</h2>
            </div>
            <Link
              href="/work"
              className="text-text-secondary text-sm hover:text-text-primary transition-colors hidden md:block"
            >
              View All Projects &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project, i) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`group block animate-fade-in-up animation-delay-${(i + 1) * 100}`}
              >
                <div className="bg-bg-card rounded-sm overflow-hidden border border-border hover:border-border-light transition-all duration-300">
                  <PlaceholderImage
                    label={project.thumbnailLabel}
                    src={project.thumbnailImage}
                    aspectRatio="3/2"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-medium text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-text-muted text-xs">{project.year}</span>
                    </div>
                    <p className="text-text-secondary text-sm">{project.client}</p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      <span className="text-xs text-text-muted bg-bg-elevated px-2 py-1 rounded-sm">
                        {project.industry}
                      </span>
                      {project.services.slice(0, 2).map((s) => (
                        <span
                          key={s}
                          className="text-xs text-text-muted bg-bg-elevated px-2 py-1 rounded-sm"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/work"
              className="text-text-secondary text-sm hover:text-text-primary transition-colors"
            >
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-bg-elevated">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent text-xs tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href="/services"
                className={`group block p-6 bg-bg-card border border-border rounded-sm hover:border-border-light transition-all duration-300 animate-fade-in-up animation-delay-${(i + 1) * 100}`}
              >
                <h3 className="text-base font-medium text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-text-secondary text-sm hover:text-text-primary transition-colors"
            >
              Learn More About Our Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="px-6 md:px-12 py-16 md:py-20 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {credentials.map((c) => (
              <span
                key={c}
                className="text-text-muted text-xs tracking-widest uppercase whitespace-nowrap"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        headline="Ready to elevate?"
        body="We take on a limited number of projects each year to ensure every client gets our full attention. If you're building something worth branding properly, let's talk."
        buttonText="Start a Conversation"
      />
    </>
  );
}
