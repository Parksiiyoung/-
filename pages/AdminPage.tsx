import React, { useState, useEffect } from 'react';
import { useAuth } from '../lib/auth';
import { cn } from '../lib/utils';
import { Container } from '../components/layout/Container';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { fetchWorks, fetchJournalEntries, fetchSideProjects } from '../lib/sanity';
import { SITE } from '../lib/constants';

export function AdminPage() {
  const { logout } = useAuth();
  const [counts, setCounts] = useState({ works: 0, journal: 0, projects: 0 });

  useEffect(() => {
    Promise.all([fetchWorks(), fetchJournalEntries(), fetchSideProjects()]).then(
      ([w, j, p]) => setCounts({ works: w.length, journal: j.length, projects: p.length })
    );
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      {/* Admin Header */}
      <div className="border-b border-border-subtle">
        <Container className="flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm font-bold">{SITE.name}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary bg-bg-dark px-2 py-0.5">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#/" className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary hover:text-text-primary transition-colors">
              View Site
            </a>
            <button
              onClick={logout}
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary hover:text-error transition-colors"
            >
              Logout
            </button>
          </div>
        </Container>
      </div>

      <Container className="py-10">
        <ScrollReveal>
          <h1 className="font-display text-page-title mb-2">Dashboard</h1>
          <p className="font-body text-body text-text-secondary mb-10">콘텐츠 관리 대시보드</p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Works', count: counts.works, desc: '포트폴리오 작업물' },
            { label: 'Journal', count: counts.journal, desc: '저널 엔트리' },
            { label: 'Projects', count: counts.projects, desc: '사이드 프로젝트' },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 80}>
              <div className="border border-border-subtle p-6">
                <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em] mb-3">{stat.label}</p>
                <p className="font-display text-[2.5rem] font-bold leading-none mb-2">{stat.count}</p>
                <p className="font-body text-body text-text-secondary">{stat.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quick Actions */}
        <ScrollReveal delay={300}>
          <div className="border-t border-border-subtle pt-8">
            <h2 className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em] mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Manage Works', desc: 'Sanity Studio에서 작업물 관리' },
                { label: 'Write Journal', desc: 'Sanity Studio에서 저널 작성' },
                { label: 'Edit Projects', desc: 'Sanity Studio에서 프로젝트 편집' },
                { label: 'Site Settings', desc: '사이트 설정 관리' },
              ].map((action) => (
                <div
                  key={action.label}
                  className="border border-border-subtle p-4 hover:border-text-primary transition-colors cursor-pointer group"
                >
                  <p className="font-display text-sm font-medium mb-1 group-hover:text-accent">{action.label}</p>
                  <p className="font-mono text-[10px] text-text-tertiary tracking-[0.05em]">{action.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Info Notice */}
        <ScrollReveal delay={400}>
          <div className="mt-12 border border-border-subtle bg-surface p-6">
            <p className="font-mono text-caption uppercase text-anniversary tracking-[0.12em] mb-2">Sanity CMS</p>
            <p className="font-body text-body text-text-secondary">
              콘텐츠는 Sanity Studio를 통해 관리됩니다. Sanity 프로젝트를 연결하면 이 대시보드에서 직접 편집할 수 있습니다.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}
