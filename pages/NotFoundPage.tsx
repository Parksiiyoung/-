import React from 'react';
import { Link } from '../lib/router';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/layout/Container';

export function NotFoundPage() {
  return (
    <Layout>
      <Container>
        <div className="py-section text-center">
          <h1 className="font-display text-hero mb-6">404</h1>
          <p className="font-body text-body-lg text-text-secondary mb-8">
            페이지를 찾을 수 없습니다.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 font-mono text-caption uppercase tracking-[0.12em] text-text-primary hover:text-text-secondary transition-colors"
          >
            <span className="inline-block w-4 h-[1px] bg-current" />
            <span>Back to Home</span>
          </Link>
        </div>
      </Container>
    </Layout>
  );
}
