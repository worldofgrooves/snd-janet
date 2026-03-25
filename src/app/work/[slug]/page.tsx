import { notFound } from "next/navigation";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionCTA from "@/components/SectionCTA";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const prev = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const next =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <>
      {/* Hero Image */}
      <section className="px-0 md:px-0">
        <PlaceholderImage
          label={project.heroLabel}
          src={project.heroImage}
          aspectRatio="21/9"
          className="w-full rounded-none"
        />
      </section>

      {/* Project Header */}
      <section className="px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-text-secondary mb-8">
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
                <p className="mt-1">{project.industry}</p>
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

      {/* Narrative Sections */}
      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* The Challenge */}
          <div className="animate-fade-in-up">
            <h2 className="text-accent text-xs tracking-widest uppercase mb-4">
              The Challenge
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Gallery Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <PlaceholderImage
                key={`gallery-1-${i}`}
                label={`Gallery Image ${i + 1} -- Detail`}
                src={project.galleryImages?.[i]}
                aspectRatio="4/3"
              />
            ))}
          </div>

          {/* Our Approach */}
          <div className="animate-fade-in-up">
            <h2 className="text-accent text-xs tracking-widest uppercase mb-4">
              Our Approach
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* Full-width gallery image */}
          <PlaceholderImage
            label={`Gallery Image -- Full Width Detail`}
            src={project.galleryImages?.[2]}
            aspectRatio="16/9"
          />

          {/* The Solution */}
          <div className="animate-fade-in-up">
            <h2 className="text-accent text-xs tracking-widest uppercase mb-4">
              The Solution
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Gallery Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <PlaceholderImage
                key={`gallery-2-${i}`}
                label={`Gallery Image ${i + 4} -- Detail`}
                src={project.galleryImages?.[i + 3]}
                aspectRatio="3/4"
              />
            ))}
          </div>

          {/* Results */}
          <div className="animate-fade-in-up">
            <h2 className="text-accent text-xs tracking-widest uppercase mb-6">
              Results
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.results.map((result, i) => (
                <div
                  key={i}
                  className="p-5 bg-bg-card border border-border rounded-sm"
                >
                  <p className="text-text-primary text-sm leading-relaxed">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="px-6 md:px-12 py-12 border-t border-border">
        <div className="max-w-4xl mx-auto flex justify-between">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group text-left"
            >
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
            <Link
              href={`/work/${next.slug}`}
              className="group text-right"
            >
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

      {/* CTA */}
      <SectionCTA
        headline="Like what you see?"
        body="Every project starts with a conversation. Tell us about your brand, and we'll tell you how we can help."
        buttonText="Start a Conversation"
      />
    </>
  );
}
