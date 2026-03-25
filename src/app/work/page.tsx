"use client";

import { useState } from "react";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { projects, industries, type Industry } from "@/data/projects";

export default function WorkPage() {
  const [filter, setFilter] = useState<Industry>("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.industry === filter);

  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-accent text-xs tracking-widest uppercase mb-4">Portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
              Work that speaks for itself.
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              A selection of brand identity, creative direction, and design projects across hospitality, entertainment, technology, and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="px-6 md:px-12 pb-20 md:pb-28">
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

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block"
              >
                <div className="bg-bg-card rounded-sm overflow-hidden border border-border hover:border-border-light transition-all duration-300">
                  <PlaceholderImage
                    label={project.thumbnailLabel}
                    src={project.thumbnailImage}
                    aspectRatio="4/3"
                  />
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-base font-medium text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-text-muted text-xs">{project.year}</span>
                    </div>
                    <p className="text-text-secondary text-sm mb-3">{project.client}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-accent bg-bg-elevated px-2 py-0.5 rounded-sm">
                        {project.industry}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
