import React, { useState } from 'react';
import { useAuth } from '../lib/auth';
import { Container } from '../components/layout/Container';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { cn } from '../lib/utils';
import { SITE } from '../lib/constants';
import type { BoardTask, Resource, TaskStatus } from '../types';

const COLUMNS: { status: TaskStatus; label: string }[] = [
  { status: 'todo', label: 'To Do' },
  { status: 'in_progress', label: 'In Progress' },
  { status: 'review', label: 'Review' },
  { status: 'done', label: 'Done' },
];

const PRIORITY_COLORS: Record<string, string> = {
  high: 'bg-error/10 text-error',
  medium: 'bg-anniversary/10 text-anniversary',
  low: 'bg-text-tertiary/10 text-text-tertiary',
};

const initialTasks: BoardTask[] = [
  { id: '1', title: 'Hyundai Card 최종 시안 정리', status: 'in_progress', assignee: 'Kim Jieun', priority: 'high', projectId: 'p1', dueDate: '2026-02-20' },
  { id: '2', title: 'GAZE 매거진 3월호 기획', status: 'todo', assignee: 'Choi Yuna', priority: 'medium', projectId: 'p2' },
  { id: '3', title: '포트폴리오 사이트 리뉴얼', status: 'in_progress', assignee: 'Jung Minwoo', priority: 'high', projectId: 'p3' },
  { id: '4', title: '제주맥주 패키지 최종 검수', status: 'review', assignee: 'Lee Donghyun', priority: 'medium', projectId: 'p4' },
  { id: '5', title: '네이버 디자인 시스템 v2 정리', status: 'done', assignee: 'Kwon Jihye', priority: 'low', projectId: 'p5' },
  { id: '6', title: '서울 디자인 페스티벌 발표 준비', status: 'todo', priority: 'medium', projectId: 'p6' },
];

const initialResources: Resource[] = [
  { id: '1', title: 'Brand Guidelines Template', category: 'Template', updatedAt: '2026-02-01' },
  { id: '2', title: 'Typography Standards', category: 'Guide', updatedAt: '2026-01-15' },
  { id: '3', title: 'Color System Documentation', category: 'Guide', updatedAt: '2025-12-20' },
  { id: '4', title: 'Print Specification Checklist', category: 'Checklist', updatedAt: '2025-11-10' },
  { id: '5', title: 'Client Onboarding Process', category: 'Process', updatedAt: '2025-10-05' },
];

export function IntranetPage() {
  const { logout } = useAuth();
  const [tab, setTab] = useState<'board' | 'resources'>('board');
  const [tasks] = useState<BoardTask[]>(initialTasks);
  const [resources] = useState<Resource[]>(initialResources);

  return (
    <div className="min-h-screen bg-bg">
      {/* Intranet Header */}
      <div className="border-b border-border-subtle">
        <Container className="flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm font-bold">{SITE.name}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary bg-bg-dark px-2 py-0.5">
              Intranet
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
          <h1 className="font-display text-page-title mb-6">Intranet</h1>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={100}>
          <div className="flex gap-1 mb-8 border-b border-border-subtle">
            {[
              { key: 'board' as const, label: 'Project Board' },
              { key: 'resources' as const, label: 'Resources' },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={cn(
                  'font-mono text-caption uppercase tracking-[0.12em] px-4 py-3 border-b-2 transition-colors -mb-[1px]',
                  tab === t.key
                    ? 'border-text-primary text-text-primary'
                    : 'border-transparent text-text-secondary hover:text-text-primary',
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Board View */}
        {tab === 'board' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {COLUMNS.map((col) => (
              <div key={col.status}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">{col.label}</h3>
                  <span className="font-mono text-[10px] text-text-tertiary">
                    {tasks.filter((t) => t.status === col.status).length}
                  </span>
                </div>
                <div className="space-y-3">
                  {tasks
                    .filter((t) => t.status === col.status)
                    .map((task) => (
                      <div
                        key={task.id}
                        className="border border-border-subtle p-4 hover:border-text-primary/30 transition-colors bg-surface"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-body text-body font-medium leading-snug">{task.title}</h4>
                          <span className={cn('font-mono text-[9px] uppercase px-1.5 py-0.5 shrink-0', PRIORITY_COLORS[task.priority])}>
                            {task.priority}
                          </span>
                        </div>
                        {task.assignee && (
                          <p className="font-mono text-[10px] text-text-tertiary tracking-[0.05em]">{task.assignee}</p>
                        )}
                        {task.dueDate && (
                          <p className="font-mono text-[10px] text-text-tertiary mt-1">Due: {task.dueDate}</p>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Resources View */}
        {tab === 'resources' && (
          <div className="border-t border-border-subtle">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="grid grid-cols-12 gap-4 py-4 border-b border-border-subtle hover:bg-surface-hover transition-colors cursor-pointer"
              >
                <div className="col-span-6 md:col-span-5">
                  <span className="font-display text-body font-medium">{resource.title}</span>
                </div>
                <div className="col-span-3 md:col-span-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary border border-border-subtle px-2 py-0.5">
                    {resource.category}
                  </span>
                </div>
                <div className="col-span-3 md:col-span-4 text-right">
                  <span className="font-mono text-[10px] text-text-tertiary">{resource.updatedAt}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
