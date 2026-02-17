import React from 'react';
import { Link } from '../../lib/router';
import { formatDateShort } from '../../lib/utils';
import { LazyImage } from '../ui/LazyImage';
import type { JournalEntry } from '../../types';

interface JournalCardProps {
  entry: JournalEntry;
}

export function JournalCard({ entry }: JournalCardProps) {
  return (
    <Link to={`/journal/${entry.slug}`} className="group block">
      {entry.thumbnail && (
        <div className="img-zoom mb-4">
          <LazyImage src={entry.thumbnail} alt={entry.title} aspectRatio="16/10" />
        </div>
      )}
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary">
          {formatDateShort(entry.date)}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary border border-border-subtle px-2 py-0.5">
          {entry.category}
        </span>
      </div>
      <h3 className="font-display text-lg font-medium mb-2 group-hover:opacity-70 transition-opacity">
        {entry.titleKo || entry.title}
      </h3>
      <p className="font-body text-body text-text-secondary line-clamp-2">
        {entry.excerpt}
      </p>
    </Link>
  );
}
