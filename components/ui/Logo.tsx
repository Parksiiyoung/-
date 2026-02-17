import React from 'react';
import { Link } from '../../lib/router';
import { cn } from '../../lib/utils';
import { SITE } from '../../lib/constants';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link to="/" className={cn('group flex items-baseline gap-2', className)}>
      <span className="font-display text-[1.25rem] font-bold tracking-[-0.02em] text-text-primary">
        {SITE.name}
      </span>
      <span className="font-mono text-[9px] tracking-[0.08em] text-anniversary opacity-80">
        EST.{SITE.founded}
      </span>
    </Link>
  );
}
