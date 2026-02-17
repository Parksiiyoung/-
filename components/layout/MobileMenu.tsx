import React, { useEffect } from 'react';
import { Link, useRouter } from '../../lib/router';
import { cn } from '../../lib/utils';
import { NAV_ITEMS, SITE } from '../../lib/constants';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { currentPath } = useRouter();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-text-primary/20 animate-overlay-in" onClick={onClose} />

      {/* Menu Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-bg animate-slide-in flex flex-col">
        {/* Close */}
        <div className="flex justify-end p-6">
          <button onClick={onClose} className="p-2 -mr-2" aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col justify-center px-10 gap-8">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={cn(
                'font-display text-[2rem] font-medium tracking-[-0.02em] text-text-secondary hover:text-text-primary transition-colors animate-reveal-left',
                `stagger-${i + 1}`,
                currentPath.startsWith(item.path) && 'text-text-primary',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-10 pb-10">
          <p className="font-mono text-caption uppercase text-text-tertiary">
            {SITE.name} — {SITE.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
