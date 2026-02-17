import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { cn } from '../../lib/utils';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { LazyImage } from '../ui/LazyImage';
import { fetchFeaturedWorks } from '../../lib/sanity';
import type { WorkProject } from '../../types';

export function SelectedWork() {
  const [works, setWorks] = useState<WorkProject[]>([]);

  useEffect(() => {
    fetchFeaturedWorks().then(setWorks);
  }, []);

  return (
    <section className="py-section">
      <Container>
        <ScrollReveal>
          <div className="flex items-baseline justify-between mb-12 md:mb-16">
            <h2 className="font-display text-section-title">Selected Work</h2>
            <Link
              to="/work"
              className="hidden md:inline-flex items-center gap-2 font-mono text-caption uppercase tracking-[0.12em] text-text-secondary hover:text-text-primary transition-colors"
            >
              <span>All Projects</span>
              <span className="inline-block w-4 h-[1px] bg-current" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {works.map((work, i) => (
            <ScrollReveal key={work.id} delay={i * 100}>
              <Link to={`/work/${work.slug}`} className="group block">
                <div className="img-zoom mb-4">
                  <LazyImage
                    src={work.thumbnail}
                    alt={work.title}
                    aspectRatio={i === 0 ? '16/10' : '4/3'}
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-medium mb-1 group-hover:opacity-70 transition-opacity">
                      {work.titleKo || work.title}
                    </h3>
                    <p className="font-mono text-caption uppercase text-text-secondary">
                      {work.category.name}
                    </p>
                  </div>
                  <span className="font-mono text-caption text-text-tertiary mt-1">
                    {work.year}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 md:hidden">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-caption uppercase tracking-[0.12em] text-text-secondary"
          >
            <span>All Projects</span>
            <span className="inline-block w-4 h-[1px] bg-current" />
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}
