import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { WorkCard } from './WorkCard';
import type { WorkProject } from '../../types';

interface WorkGridProps {
  projects: WorkProject[];
}

export function WorkGrid({ projects }: WorkGridProps) {
  if (projects.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-mono text-caption uppercase text-text-tertiary">No projects found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {projects.map((project, i) => (
        <ScrollReveal key={project.id} delay={i * 80}>
          <WorkCard project={project} />
        </ScrollReveal>
      ))}
    </div>
  );
}
