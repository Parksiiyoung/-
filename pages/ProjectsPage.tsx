import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/layout/Container';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { LazyImage } from '../components/ui/LazyImage';
import { fetchSideProjects } from '../lib/sanity';
import type { SideProject } from '../types';

const TYPE_LABELS: Record<string, string> = {
  magazine: 'Online Magazine',
  'media-art': 'Media Art',
  experimental: 'Experimental',
  tool: 'Tool',
};

export function ProjectsPage() {
  const [projects, setProjects] = useState<SideProject[]>([]);

  useEffect(() => {
    fetchSideProjects().then(setProjects);
  }, []);

  return (
    <Layout>
      <Container>
        <div className="pt-8 md:pt-16 mb-12 md:mb-16">
          <ScrollReveal>
            <h1 className="font-display text-page-title mb-4">Projects</h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="font-body text-body-lg text-text-secondary max-w-reading">
              온라인 매거진, 미디어 아트, 실험적 프로젝트 — 디자인의 경계를 넓히는 사이드 프로젝트를 아카이빙합니다.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 100}>
              <div className="group">
                <div className="img-zoom mb-5">
                  <LazyImage
                    src={project.thumbnail}
                    alt={project.title}
                    aspectRatio="16/10"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary">
                    {project.year}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-anniversary">
                    {TYPE_LABELS[project.type] || project.type}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium mb-2">
                  {project.titleKo || project.title}
                </h3>
                <p className="font-body text-body text-text-secondary mb-4 max-w-reading">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-[0.08em] text-text-tertiary border border-border-subtle px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
