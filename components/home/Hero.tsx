import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { cn } from '../../lib/utils';
import { SITE } from '../../lib/constants';
import { Container } from '../layout/Container';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const titleChars = SITE.name.split('');

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-end pb-16 md:pb-22 overflow-hidden">
      <Container>
        {/* Anniversary line */}
        <div
          className={cn(
            'mb-8 transition-all duration-700 ease-out-expo',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          )}
          style={{ transitionDelay: '200ms' }}
        >
          <span className="font-mono text-caption uppercase text-anniversary tracking-[0.2em]">
            Since {SITE.founded} — {SITE.anniversary}th Anniversary
          </span>
        </div>

        {/* Main Title - Kinetic Typography */}
        <h1 className="font-display text-hero tracking-[-0.03em] leading-[0.9] mb-8">
          {titleChars.map((char, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <span
                className={cn(
                  'inline-block transition-all duration-700 ease-out-expo',
                  mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
                )}
                style={{ transitionDelay: `${300 + i * 50}ms` }}
              >
                {char}
              </span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-5">
            <p
              className={cn(
                'font-body text-body-lg text-text-secondary max-w-md transition-all duration-700 ease-out-expo',
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              )}
              style={{ transitionDelay: '800ms' }}
            >
              브랜딩, 에디토리얼, 디지털, 공간 — 본질을 드러내는 디자인을 만듭니다.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <div
              className={cn(
                'transition-all duration-700 ease-out-expo',
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              )}
              style={{ transitionDelay: '1000ms' }}
            >
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 font-mono text-caption uppercase tracking-[0.12em] text-text-primary"
              >
                <span>View Work</span>
                <span className="inline-block w-6 h-[1px] bg-text-primary transition-all duration-300 group-hover:w-10" />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative line */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-[1px] bg-border-subtle transition-all duration-1000 ease-out-expo origin-left',
          mounted ? 'scale-x-100' : 'scale-x-0',
        )}
        style={{ transitionDelay: '1200ms' }}
      />
    </section>
  );
}
