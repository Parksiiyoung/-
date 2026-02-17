import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/layout/Container';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { JournalCard } from '../components/journal/JournalCard';
import { fetchJournalEntries } from '../lib/sanity';
import type { JournalEntry } from '../types';

export function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    fetchJournalEntries().then(setEntries);
  }, []);

  return (
    <Layout>
      <Container>
        <div className="pt-8 md:pt-16 mb-12 md:mb-16">
          <ScrollReveal>
            <h1 className="font-display text-page-title mb-4">Journal</h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="font-body text-body-lg text-text-secondary max-w-reading">
              스튜디오의 생각, 소식, 그리고 디자인에 대한 글을 공유합니다.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {entries.map((entry, i) => (
            <ScrollReveal key={entry.id} delay={i * 80}>
              <JournalCard entry={entry} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
