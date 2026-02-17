import React from 'react';
import { Link } from '../../lib/router';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { LazyImage } from '../ui/LazyImage';
import { MarkdownRenderer } from '../ui/MarkdownRenderer';
import type { WorkProject } from '../../types';

interface WorkDetailProps {
  project: WorkProject;
}

export function WorkDetail({ project }: WorkDetailProps) {
  return (
    <article>
      <Container>
        {/* Header */}
        <div className="pt-8 md:pt-16 mb-12 md:mb-22">
          <ScrollReveal>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-caption uppercase tracking-[0.12em] text-text-secondary hover:text-text-primary transition-colors mb-8 block"
            >
              <span className="inline-block w-4 h-[1px] bg-current" />
              <span>Back to Work</span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-display text-page-title mb-4">
              {project.titleKo || project.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap items-center gap-4 font-mono text-caption uppercase text-text-secondary">
              <span>{project.category.name}</span>
              <span className="w-1 h-1 rounded-full bg-text-tertiary" />
              {project.client && (
                <>
                  <span>{project.client}</span>
                  <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                </>
              )}
              <span>{project.year}</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Gallery */}
        <div className="space-y-4 mb-16 md:mb-22">
          {project.images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <LazyImage src={img} alt={`${project.title} ${i + 1}`} aspectRatio="16/9" />
            </ScrollReveal>
          ))}
        </div>

        {/* Content + Credits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-section">
          <div className="md:col-span-8">
            <ScrollReveal>
              <MarkdownRenderer content={project.description} />
            </ScrollReveal>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <ScrollReveal delay={200}>
              <div className="border-t border-border-subtle pt-6 space-y-6">
                {/* Credits */}
                <div>
                  <h4 className="font-mono text-caption uppercase text-text-tertiary mb-3 tracking-[0.12em]">Credits</h4>
                  <div className="space-y-2">
                    {project.credits.map((credit, i) => (
                      <div key={i}>
                        <p className="font-mono text-[10px] uppercase text-text-tertiary tracking-[0.1em]">{credit.role}</p>
                        <p className="font-body text-body">{credit.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                {project.tags.length > 0 && (
                  <div>
                    <h4 className="font-mono text-caption uppercase text-text-tertiary mb-3 tracking-[0.12em]">Tags</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-[0.08em] text-text-secondary border border-border-subtle px-2 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </article>
  );
}
