import React from 'react';
import { Link } from '../../lib/router';
import { cn } from '../../lib/utils';
import { SITE, NAV_ITEMS, SOCIAL_LINKS } from '../../lib/constants';
import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle mt-section">
      <Container className="py-16 md:py-22">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Studio Info */}
          <div className="md:col-span-4">
            <p className="font-display text-lg font-bold tracking-[-0.02em] mb-3">{SITE.name}</p>
            <p className="font-mono text-caption uppercase text-text-secondary mb-1">{SITE.tagline}</p>
            <p className="font-mono text-caption uppercase text-text-tertiary">{SITE.email}</p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <p className="font-mono text-caption uppercase text-text-tertiary mb-4">Navigation</p>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-body text-body text-text-secondary hover:text-text-primary transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <p className="font-mono text-caption uppercase text-text-tertiary mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-body text-text-secondary hover:text-text-primary transition-colors w-fit"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Anniversary Line */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-tertiary">
            Since {SITE.founded} — <span className="text-anniversary">{SITE.anniversary}th Anniversary</span>
          </p>
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-tertiary">
            © {currentYear} {SITE.name}. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
