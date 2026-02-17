import React, { useState } from 'react';
import { Link, useRouter } from '../../lib/router';
import { useScrollDirection, useScrollTop } from '../../lib/hooks';
import { cn } from '../../lib/utils';
import { NAV_ITEMS } from '../../lib/constants';
import { Logo } from '../ui/Logo';
import { MobileMenu } from './MobileMenu';
import { Container } from './Container';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const direction = useScrollDirection();
  const scrollTop = useScrollTop();
  const { currentPath } = useRouter();

  const isScrolled = scrollTop > 50;
  const isHidden = direction === 'down' && scrollTop > 200;
  const isHome = currentPath === '/';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo',
          isHidden && '-translate-y-full',
          isScrolled ? 'bg-bg/95 backdrop-blur-md border-b border-border-subtle' : 'bg-transparent',
        )}
      >
        <Container className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'nav-link font-mono text-nav uppercase text-text-secondary hover:text-text-primary transition-colors',
                  currentPath.startsWith(item.path) && 'active text-text-primary',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            aria-label="Open menu"
          >
            <span className="block w-5 h-[1.5px] bg-text-primary" />
            <span className="block w-5 h-[1.5px] bg-text-primary" />
          </button>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
