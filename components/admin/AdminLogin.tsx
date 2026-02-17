import React, { useState } from 'react';
import { useAuth } from '../../lib/auth';
import { cn } from '../../lib/utils';
import { Container } from '../layout/Container';
import type { UserRole } from '../../types';

interface AdminLoginProps {
  requiredRole: string;
}

const ROLE_LABELS: Record<string, { title: string; subtitle: string }> = {
  admin: { title: 'Admin', subtitle: '관리자 로그인' },
  client: { title: 'Client Portal', subtitle: '클라이언트 로그인' },
  team: { title: 'Intranet', subtitle: '팀 로그인' },
};

export function AdminLogin({ requiredRole }: AdminLoginProps) {
  const { login } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const labels = ROLE_LABELS[requiredRole] || ROLE_LABELS.admin;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password, requiredRole as UserRole);
    if (!success) {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Container className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="text-center mb-10">
            <h1 className="font-display text-2xl font-bold mb-2">{labels.title}</h1>
            <p className="font-mono text-caption uppercase text-text-secondary tracking-[0.12em]">
              {labels.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-mono text-caption uppercase text-text-tertiary mb-2 tracking-[0.12em]">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={cn(
                  'w-full bg-transparent border-b py-3 font-mono text-body text-text-primary outline-none transition-colors duration-300',
                  error ? 'border-error' : 'border-border-subtle focus:border-text-primary',
                )}
                placeholder="••••••••"
                autoFocus
              />
              {error && (
                <p className="font-mono text-[10px] text-error mt-2 tracking-[0.05em]">
                  Invalid password
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-text-primary text-bg font-mono text-caption uppercase tracking-[0.12em] py-3 hover:bg-accent transition-colors duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-8 text-center">
            <a
              href="#/"
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary hover:text-text-primary transition-colors"
            >
              ← Back to Site
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
