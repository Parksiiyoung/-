import React from 'react';
import { Link } from '../../lib/router';
import { formatDate } from '../../lib/utils';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { LazyImage } from '../ui/LazyImage';
import { MarkdownRenderer } from '../ui/MarkdownRenderer';
import type { JournalEntry } from '../../types';

interface JournalDetailProps {
  entry: JournalEntry;
}

export function JournalDetail({ entry }: JournalDetailProps) {
  return (
    <article>
      <Container>
        <div className="pt-8 md:pt-16 max-w-reading mx-auto">
          <ScrollReveal>
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 font-mono text-caption uppercase tracking-[0.12em] text-text-secondary hover:text-text-primary transition-colors mb-10 block"
            >
              <span className="inline-block w-4 h-[1px] bg-current" />
              <span>Back to Journal</span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-caption uppercase text-text-tertiary">{formatDate(entry.date)}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary border border-border-subtle px-2 py-0.5">
                {entry.category}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="font-display text-page-title mb-6">
              {entry.titleKo || entry.title}
            </h1>
          </ScrollReveal>

          {entry.author && (
            <ScrollReveal delay={300}>
              <p className="font-mono text-caption uppercase text-text-secondary mb-10 tracking-[0.1em]">
                By {entry.author}
              </p>
            </ScrollReveal>
          )}

          {entry.thumbnail && (
            <ScrollReveal delay={350}>
              <div className="mb-12">
                <LazyImage src={entry.thumbnail} alt={entry.title} aspectRatio="16/9" />
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={400}>
            <MarkdownRenderer content={entry.content} />
          </ScrollReveal>
        </div>
      </Container>
    </article>
  );
}
