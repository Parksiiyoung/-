import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { formatDateShort } from '../../lib/utils';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { fetchLatestJournal } from '../../lib/sanity';
import type { JournalEntry } from '../../types';

export function LatestJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    fetchLatestJournal(3).then(setEntries);
  }, []);

  return (
    <section className="py-section">
      <Container>
        <ScrollReveal>
          <div className="flex items-baseline justify-between mb-12 md:mb-16">
            <h2 className="font-display text-section-title">Journal</h2>
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 font-mono text-caption uppercase tracking-[0.12em] text-text-secondary hover:text-text-primary transition-colors"
            >
              <span>All Entries</span>
              <span className="inline-block w-4 h-[1px] bg-current" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="border-t border-border-subtle">
          {entries.map((entry, i) => (
            <ScrollReveal key={entry.id} delay={i * 80}>
              <Link
                to={`/journal/${entry.slug}`}
                className="group block py-6 md:py-8 border-b border-border-subtle"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline">
                  <span className="font-mono text-caption text-text-tertiary md:col-span-2">
                    {formatDateShort(entry.date)}
                  </span>
                  <h3 className="font-display text-lg md:text-xl font-medium md:col-span-6 group-hover:opacity-70 transition-opacity">
                    {entry.titleKo || entry.title}
                  </h3>
                  <p className="font-body text-body text-text-secondary md:col-span-4 line-clamp-2">
                    {entry.excerpt}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
