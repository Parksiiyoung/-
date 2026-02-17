import React from 'react';
import { useAuth } from '../lib/auth';
import { Container } from '../components/layout/Container';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SITE } from '../lib/constants';
import type { PortalProject } from '../types';

const mockProjects: PortalProject[] = [
  {
    id: '1',
    clientId: 'c1',
    name: 'Brand Renewal 2025',
    nameKo: '브랜드 리뉴얼 2025',
    status: 'active',
    links: [
      { type: 'figma', label: 'Figma — Brand Guidelines', url: '#' },
      { type: 'picflow', label: 'Picflow — Image Selection', url: '#' },
      { type: 'drive', label: 'Google Drive — Assets', url: '#' },
    ],
    updatedAt: '2026-02-10',
  },
  {
    id: '2',
    clientId: 'c1',
    name: 'Annual Report Design',
    nameKo: '연간 보고서 디자인',
    status: 'completed',
    links: [
      { type: 'drive', label: 'Google Drive — Final Files', url: '#' },
      { type: 'other', label: 'Print Proof Review', url: '#' },
    ],
    updatedAt: '2025-12-20',
  },
];

const LINK_ICONS: Record<string, string> = {
  figma: '◆',
  picflow: '◇',
  drive: '▶',
  notion: '■',
  other: '●',
};

const STATUS_STYLES: Record<string, string> = {
  active: 'text-success',
  completed: 'text-text-tertiary',
  paused: 'text-anniversary',
};

export function PortalPage() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-bg">
      {/* Portal Header */}
      <div className="border-b border-border-subtle">
        <Container className="flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm font-bold">{SITE.name}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary bg-bg-dark px-2 py-0.5">
              Client Portal
            </span>
          </div>
          <button
            onClick={logout}
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary hover:text-error transition-colors"
          >
            Logout
          </button>
        </Container>
      </div>

      <Container className="py-10">
        <ScrollReveal>
          <h1 className="font-display text-page-title mb-2">Client Portal</h1>
          <p className="font-body text-body text-text-secondary mb-10">프로젝트 자료와 진행 상황을 확인하세요.</p>
        </ScrollReveal>

        <div className="space-y-8">
          {mockProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 100}>
              <div className="border border-border-subtle p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="font-display text-xl font-medium mb-1">{project.nameKo || project.name}</h2>
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-[10px] uppercase tracking-[0.12em] ${STATUS_STYLES[project.status]}`}>
                        {project.status}
                      </span>
                      <span className="font-mono text-[10px] text-text-tertiary">
                        Updated {project.updatedAt}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em] mb-2">Project Links</p>
                  {project.links.map((link, li) => (
                    <a
                      key={li}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 py-3 border-b border-border-subtle hover:bg-surface-hover transition-colors -mx-2 px-2 group"
                    >
                      <span className="font-mono text-[10px] text-text-tertiary w-4">{LINK_ICONS[link.type] || '●'}</span>
                      <span className="font-body text-body group-hover:text-text-primary transition-colors">{link.label}</span>
                      <span className="ml-auto font-mono text-[10px] uppercase text-text-tertiary tracking-[0.1em]">{link.type}</span>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
