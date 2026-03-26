"use client";

import { useState } from "react";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { caseStudies, galleryProjects, industries, type Industry } from "@/data/projects";

export default function WorkPage() {
  const [filter, setFilter] = useState<Industry>("All");

  const filteredCaseStudies =
    filter === "All"
      ? caseStudies
      : caseStudies.filter((p) => p.industry === filter);

  const filteredGallery =
    filter === "All"
      ? galleryProjects
      : galleryProjects.filter((p) => p.industry === filter);

  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-5">
              Selected Work
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Brand identity, creative direction, and design systems for
              experiential brands.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-10">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`px-4 py-2 text-xs tracking-wide rounded-sm transition-all duration-200 ${
                  filter === ind
                    ? "bg-text-primary text-bg"
                    : "bg-bg-card border border-border text-text-secondary hover:border-border-light hover:text-text-primary"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Case Studies (larger cards) */}
          {filteredCaseStudies.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {filteredCaseStudies.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group block"
                >
                  <div className="bg-bg-card rounded-sm overflow-hidden border border-border hover:border-border-light transition-all duration-300">
                    <PlaceholderImage
                      label={`${project.title} -- ${project.services[0]}`}
                      src={project.thumbnailImage}
                      alt={`${project.title} brand identity case study`}
                      aspectRatio="16/10"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-display text-lg text-text-primary group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-text-muted text-xs">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm italic mb-3">
                        {project.tagline}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs text-text-muted border border-border px-2.5 py-0.5 rounded-sm">
                          {project.industry}
                        </span>
                        {project.services.slice(0, 2).map((s) => (
                          <span
                            key={s}
                            className="text-xs text-text-muted border border-border px-2.5 py-0.5 rounded-sm"
                          >
                            {s}
                          </span>
                        ))}
                        <span className="text-xs text-accent ml-auto">
                          View Case Study &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Gallery-only projects (smaller cards, no dedicated pages) */}
          {filteredGallery.length > 0 && (
            <>
              {filteredCaseStudies.length > 0 && (
                <div className="border-t border-border pt-10 mb-6">
                  <p className="text-text-muted text-xs tracking-widest uppercase mb-6">
                    Additional Projects
                  </p>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredGallery.map((project) => (
                  <div
                    key={project.slug}
                    className="bg-bg-card rounded-sm overflow-hidden border border-border"
                  >
                    <PlaceholderImage
                      label={`${project.title}`}
                      alt={`${project.title} project`}
                      aspectRatio="4/3"
                    />
                    <div className="p-5">
                      <h3 className="font-display text-base text-text-primary mb-1">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary text-sm mb-2">
                        {project.description}
                      </p>
                      <span className="text-xs text-text-muted border border-border px-2 py-0.5 rounded-sm">
                        {project.industryTag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {filteredCaseStudies.length === 0 && filteredGallery.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
