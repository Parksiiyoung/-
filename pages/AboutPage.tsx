import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/layout/Container';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { LazyImage } from '../components/ui/LazyImage';
import { fetchStudioInfo, fetchTeam, fetchTimeline, fetchAwards } from '../lib/sanity';
import type { StudioInfo, TeamMember, TimelineMilestone, Award } from '../types';

export function AboutPage() {
  const [studio, setStudio] = useState<StudioInfo | null>(null);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [timeline, setTimeline] = useState<TimelineMilestone[]>([]);
  const [awards, setAwards] = useState<Award[]>([]);

  useEffect(() => {
    fetchStudioInfo().then(setStudio);
    fetchTeam().then(setTeam);
    fetchTimeline().then(setTimeline);
    fetchAwards().then(setAwards);
  }, []);

  if (!studio) return <Layout><div className="py-section" /></Layout>;

  return (
    <Layout>
      <Container>
        {/* Intro */}
        <div className="pt-8 md:pt-16 mb-section">
          <ScrollReveal>
            <h1 className="font-display text-page-title mb-8">About</h1>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            <div className="md:col-span-7">
              <ScrollReveal delay={100}>
                <p className="font-body text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.7] font-light text-text-primary">
                  {studio.descriptionKo}
                </p>
              </ScrollReveal>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <ScrollReveal delay={200}>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-caption uppercase text-text-tertiary mb-1 tracking-[0.12em]">Founded</p>
                    <p className="font-display text-lg">{studio.founded}</p>
                  </div>
                  <div>
                    <p className="font-mono text-caption uppercase text-text-tertiary mb-1 tracking-[0.12em]">Location</p>
                    <p className="font-body text-body">{studio.addressKo}</p>
                  </div>
                  <div>
                    <p className="font-mono text-caption uppercase text-text-tertiary mb-1 tracking-[0.12em]">Contact</p>
                    <p className="font-body text-body">{studio.email}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-section">
          <ScrollReveal>
            <div className="border-t border-border-subtle pt-12 md:pt-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-2">
                  <span className="font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">Philosophy</span>
                </div>
                <div className="md:col-span-7">
                  <p className="font-body text-body-lg text-text-secondary max-w-reading">
                    {studio.philosophyKo}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="mb-section">
          <ScrollReveal>
            <div className="border-t border-border-subtle pt-12 md:pt-16">
              <h2 className="font-display text-section-title mb-12">20 Years</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 60}>
                <div className="grid grid-cols-12 gap-4 py-4 border-b border-border-subtle group">
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-caption text-text-tertiary">{item.year}</span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <span className="font-display text-base font-medium">{item.titleKo || item.title}</span>
                  </div>
                  <div className="col-span-12 md:col-span-6 md:col-start-7">
                    {item.description && (
                      <span className="font-body text-body text-text-secondary">{item.description}</span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-section">
          <ScrollReveal>
            <div className="border-t border-border-subtle pt-12 md:pt-16">
              <h2 className="font-display text-section-title mb-12">Team</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 80}>
                <div>
                  {member.image && (
                    <LazyImage src={member.image} alt={member.name} aspectRatio="1/1" className="mb-4" />
                  )}
                  <h3 className="font-display text-base font-medium">{member.name}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary mt-1">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-section">
          <ScrollReveal>
            <div className="border-t border-border-subtle pt-12 md:pt-16">
              <h2 className="font-display text-section-title mb-12">Recognition</h2>
            </div>
          </ScrollReveal>
          <div className="border-t border-border-subtle">
            {awards.map((award, i) => (
              <ScrollReveal key={`${award.year}-${award.title}`} delay={i * 40}>
                <div className="grid grid-cols-12 gap-4 py-3 border-b border-border-subtle text-body">
                  <span className="col-span-2 md:col-span-1 font-mono text-caption text-text-tertiary">{award.year}</span>
                  <span className="col-span-10 md:col-span-4 font-display font-medium">{award.title}</span>
                  <span className="col-span-6 md:col-span-3 font-body text-text-secondary hidden md:block">{award.organization}</span>
                  <span className="col-span-6 md:col-span-4 font-body text-text-tertiary hidden md:block">{award.project}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
