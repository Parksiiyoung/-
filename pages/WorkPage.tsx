import React, { useState, useEffect, useMemo } from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/layout/Container';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { WorkFilter } from '../components/work/WorkFilter';
import { WorkGrid } from '../components/work/WorkGrid';
import { fetchWorks, fetchWorkCategories } from '../lib/sanity';
import type { WorkProject, WorkCategory } from '../types';

export function WorkPage() {
  const [works, setWorks] = useState<WorkProject[]>([]);
  const [categories, setCategories] = useState<WorkCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchWorks().then(setWorks);
    fetchWorkCategories().then(setCategories);
  }, []);

  const filtered = useMemo(() => {
    if (!activeCategory) return works;
    return works.filter((w) => w.category.slug === activeCategory);
  }, [works, activeCategory]);

  return (
    <Layout>
      <Container>
        <div className="pt-8 md:pt-16 mb-12 md:mb-16">
          <ScrollReveal>
            <h1 className="font-display text-page-title mb-8">Work</h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <WorkFilter
              categories={categories}
              activeCategory={activeCategory}
              onSelect={setActiveCategory}
            />
          </ScrollReveal>
        </div>
        <WorkGrid projects={filtered} />
      </Container>
    </Layout>
  );
}
