import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionCTA from "@/components/SectionCTA";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { StaggerContainer, StaggerChild } from "@/components/motion/StaggerContainer";
import { WorkScrollCard } from "@/components/motion/WorkScrollCard";
import { caseStudies } from "@/data/projects";

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} -- Brand Identity Case Study | Plume Creative`,
    description: `How Plume Creative developed ${project.services.join(", ").toLowerCase()} for ${project.client}. Strategy-first brand identity design.`,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = caseStudies.findIndex((p) => p.slug === slug);
  const project = caseStudies[projectIndex];

  if (!project) {
    notFound();
  }

  const prev = projectIndex > 0 ? caseStudies[projectIndex - 1] : null;
  const next =
    projectIndex < caseStudies.length - 1
      ? caseStudies[projectIndex + 1]
      : null;

  const sections = [
    { label: "The Vision", content: project.vision },
    { label: "The Canvas", content: project.canvas },
    { label: "The Approach", content: project.approach },
    { label: "The Work", content: project.work },
    { label: "The Details", content: project.details },
    { label: "The Impact", content: project.impact },
  ];

  return (
    <>
      {/* ── Full-Bleed Hero Image ── */}
      <section data-manuvi-id="casestudy-hero" data-manuvi-editable="style" className="relative overflow-hidden" style={{ height: "70vh" }}>
        <div className="absolute inset-0">
          <ImageReveal delay={0}>
            <PlaceholderImage
              label={`${project.title} -- Hero`}
              src={project.heroImage}
              alt={`${project.title} brand identity hero image`}
              aspectRatio="21/9"
              className="w-full"
            />
          </ImageReveal>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 gradient-overlay-bottom pointer-events-none" />
        {/* Title over image */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10 md:pb-14">
          <ClipReveal delay={0.3}>
            <h1 className="font-display text-4xl md:text-6xl text-white tracking-tight mb-3">
              {project.title}
            </h1>
            <p className="text-white/70 text-lg italic">{project.tagline}</p>
          </ClipReveal>
        </div>
      </section>

      {/* ── Project Metadata ── */}
      <section data-manuvi-id="casestudy-metadata" data-manuvi-editable="style" className="px-6 md:px-12 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          <StaggerContainer
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-text-secondary"
            staggerDelay={0.08}
          >
            {[
              { label: "Client", value: project.client },
              { label: "Industry", value: project.industryTag },
              { label: "Year", value: String(project.year) },
              { label: "Services", value: project.services.join(", ") },
              ...(project.timeline
                ? [{ label: "Timeline", value: project.timeline }]
                : []),
            ].map(({ label, value }) => (
              <StaggerChild key={label}>
                <div>
                  <span className="text-text-muted text-xs tracking-widest uppercase block mb-1">
                    {label}
                  </span>
                  <p>{value}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerContainer>

          {/* Scope & Outcome */}
          {(project.scope || project.outcome) && (
            <div className="mt-8 space-y-4">
              {project.scope && (
                <div>
                  <span className="text-text-muted text-xs tracking-widest uppercase block mb-1">
                    Scope
                  </span>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.scope}
                  </p>
                </div>
              )}
              {project.outcome && (
                <div>
                  <span className="text-text-muted text-xs tracking-widest uppercase block mb-1">
                    Outcome
                  </span>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── Art of Transformation Narrative Sections ── */}
      <section data-manuvi-id="casestudy-narrative" data-manuvi-editable="style" className="px-6 md:px-12 pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto space-y-14">
          {sections.map((section, i) => (
            <div key={section.label}>
              {/* Gallery images between narrative sections */}
              {i === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
                  <ImageReveal delay={0}>
                    <PlaceholderImage
                      label={`${project.title} -- Detail 1`}
                      src={project.galleryImages?.[0]}
                      alt={`${project.title} design detail`}
                      aspectRatio="4/3"
                    />
                  </ImageReveal>
                  <ImageReveal delay={0.15}>
                    <PlaceholderImage
                      label={`${project.title} -- Detail 2`}
                      src={project.galleryImages?.[1]}
                      alt={`${project.title} design detail`}
                      aspectRatio="4/3"
                    />
                  </ImageReveal>
                </div>
              )}
              {i === 4 && (
                <ImageReveal delay={0} className="mb-14">
                  <PlaceholderImage
                    label={`${project.title} -- Full Width`}
                    src={project.galleryImages?.[2]}
                    alt={`${project.title} full showcase`}
                    aspectRatio="16/9"
                  />
                </ImageReveal>
              )}

              {/* Section heading + body */}
              <ClipReveal direction={i % 2 === 0 ? "left" : "up"} duration={0.7}>
                <h2 className="text-accent text-xs tracking-widest uppercase mb-4">
                  {section.label}
                </h2>
              </ClipReveal>
              <ClipReveal delay={0.15} duration={0.7}>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {section.content}
                </p>
              </ClipReveal>
            </div>
          ))}

          {/* Gallery Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <ImageReveal key={`gallery-row-${i}`} delay={i * 0.15}>
                <PlaceholderImage
                  label={`${project.title} -- Gallery ${i + 1}`}
                  src={project.galleryImages?.[i + 3]}
                  alt={`${project.title} gallery image`}
                  aspectRatio="3/4"
                />
              </ImageReveal>
            ))}
          </div>

          {/* Credits */}
          {project.credits.length > 0 && (
            <div className="pt-8 border-t border-border">
              <ClipReveal>
                <h2 className="text-text-muted text-xs tracking-widest uppercase mb-4">
                  Credits
                </h2>
              </ClipReveal>
              <StaggerContainer
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                staggerDelay={0.06}
              >
                {project.credits.map((credit) => (
                  <StaggerChild key={credit.role}>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide">
                        {credit.role}
                      </p>
                      <p className="text-text-primary text-sm mt-1">{credit.name}</p>
                    </div>
                  </StaggerChild>
                ))}
              </StaggerContainer>
            </div>
          )}
        </div>
      </section>

      {/* ── Prev/Next Navigation ── */}
      <section data-manuvi-id="casestudy-nav" data-manuvi-editable="style" className="px-6 md:px-12 py-10 border-t border-border">
        <div className="max-w-4xl mx-auto flex justify-between">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group text-left">
              <span className="text-text-muted text-xs tracking-widest uppercase">
                &larr; Previous
              </span>
              <p className="text-text-secondary text-sm mt-1 group-hover:text-text-primary transition-colors">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link href={`/work/${next.slug}`} className="group text-right">
              <span className="text-text-muted text-xs tracking-widest uppercase">
                Next &rarr;
              </span>
              <p className="text-text-secondary text-sm mt-1 group-hover:text-text-primary transition-colors">
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* ── Other Works ── */}
      {(() => {
        const otherWorks = caseStudies
          .filter((p) => p.slug !== project.slug)
          .slice(0, 3);
        return otherWorks.length > 0 ? (
          <section
            data-manuvi-id="casestudy-other-works"
            data-manuvi-editable="style"
            className="px-6 md:px-12 py-14 md:py-20 border-t border-border"
          >
            <div className="max-w-7xl mx-auto">
              <ClipReveal>
                <h2 className="font-display text-display-statement mb-10">
                  Other Work
                </h2>
              </ClipReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherWorks.map((p) => (
                  <WorkScrollCard
                    key={p.slug}
                    href={`/work/${p.slug}`}
                    title={p.title}
                    tagline={p.tagline}
                    year={p.year}
                    thumbnailImage={p.thumbnailImage}
                    imageAlt={`${p.title} brand identity case study`}
                    aspectRatio="4/3"
                  />
                ))}
              </div>
            </div>
          </section>
        ) : null;
      })()}

      {/* CTA (case study pages only -- per spec) */}
      <SectionCTA
        headline="Let&rsquo;s create something like this for your brand."
        body="Every project starts with a conversation. Tell us about your brand, and we'll show you what's possible."
        buttonText="Start a Project"
      />
    </>
  );
}
