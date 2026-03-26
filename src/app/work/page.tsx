"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PlaceholderImage from "@/components/PlaceholderImage";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/motion/StaggerContainer";
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
          <div className="max-w-2xl">
            <ClipReveal delay={0.1}>
              <h1 className="font-display text-display-section leading-tight tracking-tight mb-5">
                Selected Work
              </h1>
            </ClipReveal>
            <ClipReveal delay={0.25}>
              <p className="text-text-secondary text-lg leading-relaxed">
                Brand identity, creative direction, and design systems for
                experiential brands.
              </p>
            </ClipReveal>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">

          {/* Filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`px-4 py-2 text-xs tracking-wide rounded-sm transition-all duration-300 ${
                  filter === ind
                    ? "bg-text-primary text-bg"
                    : "bg-bg-card border border-border text-text-secondary hover:border-border-light hover:text-text-primary"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)" }}
              >
                {ind}
              </button>
            ))}
          </motion.div>

          {/* Case Studies -- full-bleed cards */}
          {filteredCaseStudies.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {filteredCaseStudies.map((project, i) => (
                <ImageReveal key={project.slug} delay={i * 0.1}>
                  <Link href={`/work/${project.slug}`} className="group block relative overflow-hidden">
                    <PlaceholderImage
                      label={`${project.title} -- ${project.services[0]}`}
                      src={project.thumbnailImage}
                      alt={`${project.title} brand identity case study`}
                      aspectRatio="16/10"
                      className="w-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 gradient-overlay-bottom pointer-events-none">
                      <ClipReveal delay={i * 0.1 + 0.3}>
                        <div className="flex justify-between items-end">
                          <div>
                            <h3 className="font-display text-lg text-white mb-0.5">
                              {project.title}
                            </h3>
                            <p className="text-white/70 text-sm italic">{project.tagline}</p>
                          </div>
                          <span className="text-white/60 text-xs ml-3 shrink-0">{project.year}</span>
                        </div>
                        <span className="inline-block mt-3 text-xs text-accent font-medium">
                          View Case Study &rarr;
                        </span>
                      </ClipReveal>
                    </div>
                  </Link>
                </ImageReveal>
              ))}
            </div>
          )}

          {/* Gallery-only projects (smaller, no dedicated pages) */}
          {filteredGallery.length > 0 && (
            <>
              {filteredCaseStudies.length > 0 && (
                <div className="border-t border-border pt-10 mb-8">
                  <ClipReveal>
                    <p className="text-text-muted text-xs tracking-widest uppercase">
                      Additional Projects
                    </p>
                  </ClipReveal>
                </div>
              )}
              <StaggerContainer
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                staggerDelay={0.08}
              >
                {filteredGallery.map((project) => (
                  <motion.div
                    key={project.slug}
                    variants={staggerItemVariants}
                    className="group relative overflow-hidden"
                  >
                    <PlaceholderImage
                      label={`${project.title}`}
                      alt={`${project.title} project`}
                      aspectRatio="4/3"
                      className="w-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5 gradient-overlay-bottom pointer-events-none">
                      <h3 className="font-display text-base text-white mb-0.5">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-xs">{project.industryTag}</p>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </>
          )}

          {filteredCaseStudies.length === 0 && filteredGallery.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
