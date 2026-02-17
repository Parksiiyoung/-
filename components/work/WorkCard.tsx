import React from 'react';
import { Link } from '../../lib/router';
import { LazyImage } from '../ui/LazyImage';
import type { WorkProject } from '../../types';

interface WorkCardProps {
  project: WorkProject;
}

export function WorkCard({ project }: WorkCardProps) {
  return (
    <Link to={`/work/${project.slug}`} className="group block">
      <div className="img-zoom mb-4">
        <LazyImage
          src={project.thumbnail}
          alt={project.title}
          aspectRatio="4/3"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-base md:text-lg font-medium mb-1 group-hover:opacity-70 transition-opacity">
            {project.titleKo || project.title}
          </h3>
          <p className="font-mono text-caption uppercase text-text-secondary">
            {project.category.name} — {project.client || 'Self-initiated'}
          </p>
        </div>
        <span className="font-mono text-caption text-text-tertiary shrink-0 mt-1">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
