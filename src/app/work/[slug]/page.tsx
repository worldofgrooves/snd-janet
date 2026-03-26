import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionCTA from "@/components/SectionCTA";
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
      {/* Hero Image */}
      <section>
        <PlaceholderImage
          label={`${project.title} -- Hero`}
          src={project.heroImage}
          alt={`${project.title} brand identity hero image`}
          aspectRatio="21/9"
          className="w-full"
        />
      </section>

      {/* Project Header */}
      <section className="px-6 md:px-12 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-2">
              {project.title}
            </h1>
            <p className="text-text-secondary text-lg italic mb-6">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-text-secondary">
              <div>
                <span className="text-text-muted text-xs tracking-widest uppercase">
                  Client
                </span>
                <p className="mt-1">{project.client}</p>
              </div>
              <div>
                <span className="text-text-muted text-xs tracking-widest uppercase">
                  Industry
                </span>
                <p className="mt-1">{project.industryTag}</p>
              </div>
              <div>
                <span className="text-text-muted text-xs tracking-widest uppercase">
                  Year
                </span>
                <p className="mt-1">{project.year}</p>
              </div>
              <div>
                <span className="text-text-muted text-xs tracking-widest uppercase">
                  Services
                </span>
                <p className="mt-1">{project.services.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art of Transformation Narrative Sections */}
      <section className="px-6 md:px-12 pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto space-y-14">
          {sections.map((section, i) => (
            <div key={section.label}>
              {/* Insert gallery images between narrative sections */}
              {i === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
                  <PlaceholderImage
                    label={`${project.title} -- Detail 1`}
                    src={project.galleryImages?.[0]}
                    alt={`${project.title} design detail`}
                    aspectRatio="4/3"
                  />
                  <PlaceholderImage
                    label={`${project.title} -- Detail 2`}
                    src={project.galleryImages?.[1]}
                    alt={`${project.title} design detail`}
                    aspectRatio="4/3"
                  />
                </div>
              )}
              {i === 4 && (
                <div className="mb-14">
                  <PlaceholderImage
                    label={`${project.title} -- Full Width`}
                    src={project.galleryImages?.[2]}
                    alt={`${project.title} full showcase`}
                    aspectRatio="16/9"
                  />
                </div>
              )}

              <div className="animate-fade-in-up">
                <h2 className="text-accent text-xs tracking-widest uppercase mb-4">
                  {section.label}
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}

          {/* Gallery Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <PlaceholderImage
                key={`gallery-row-${i}`}
                label={`${project.title} -- Gallery ${i + 1}`}
                src={project.galleryImages?.[i + 3]}
                alt={`${project.title} gallery image`}
                aspectRatio="3/4"
              />
            ))}
          </div>

          {/* Credits */}
          {project.credits.length > 0 && (
            <div className="pt-8 border-t border-border">
              <h2 className="text-text-muted text-xs tracking-widest uppercase mb-4">
                Credits
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.credits.map((credit) => (
                  <div key={credit.role}>
                    <p className="text-text-muted text-xs uppercase tracking-wide">
                      {credit.role}
                    </p>
                    <p className="text-text-primary text-sm mt-1">
                      {credit.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="px-6 md:px-12 py-10 border-t border-border">
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

      {/* CTA (case study pages are the ONLY pages that get an additional CTA per spec) */}
      <SectionCTA
        headline="Let&rsquo;s create something like this for your brand."
        body="Every project starts with a conversation. Tell us about your brand, and we'll show you what's possible."
        buttonText="Start a Project"
      />
    </>
  );
}
