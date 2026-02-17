import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/home/Hero';
import { SelectedWork } from '../components/home/SelectedWork';
import { LatestJournal } from '../components/home/LatestJournal';
import { StudioIntro } from '../components/home/StudioIntro';

export function HomePage() {
  return (
    <Layout>
      <Hero />
      <SelectedWork />
      <StudioIntro />
      <LatestJournal />
    </Layout>
  );
}
