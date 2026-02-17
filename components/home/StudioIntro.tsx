import React from 'react';
import { Link } from '../../lib/router';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';

export function StudioIntro() {
  return (
    <section className="py-section">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-2">
            <ScrollReveal>
              <span className="font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
                About
              </span>
            </ScrollReveal>
          </div>
          <div className="md:col-span-7">
            <ScrollReveal delay={100}>
              <p className="font-body text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.6] font-light text-text-primary mb-8">
                디자인은 보이지 않는 것을 보이게 하는 일입니다.
                우리가 추구하는 미니멀리즘은 단순한 미학이 아닌 하나의 태도입니다 —
                불필요한 것을 모두 걷어내고 본질만 남길 때까지.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 font-mono text-caption uppercase tracking-[0.12em] text-text-primary"
              >
                <span>About Studio</span>
                <span className="inline-block w-6 h-[1px] bg-text-primary transition-all duration-300 group-hover:w-10" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
