import React from 'react';
import { cn } from '../../lib/utils';
import type { WorkCategory } from '../../types';

interface WorkFilterProps {
  categories: WorkCategory[];
  activeCategory: string | null;
  onSelect: (slug: string | null) => void;
}

export function WorkFilter({ categories, activeCategory, onSelect }: WorkFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          'font-mono text-[10px] uppercase tracking-[0.12em] px-3 py-1.5 transition-all duration-300 ease-out-expo',
          !activeCategory
            ? 'bg-text-primary text-bg'
            : 'text-text-secondary border border-border-subtle hover:border-text-primary hover:text-text-primary',
        )}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.slug)}
          className={cn(
            'font-mono text-[10px] uppercase tracking-[0.12em] px-3 py-1.5 transition-all duration-300 ease-out-expo',
            activeCategory === cat.slug
              ? 'bg-text-primary text-bg'
              : 'text-text-secondary border border-border-subtle hover:border-text-primary hover:text-text-primary',
          )}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
