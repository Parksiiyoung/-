import React from 'react';
import { useScrollReveal } from '../../lib/hooks';
import { cn } from '../../lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'fade' | 'scale';
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollReveal();

  const animClass = {
    up: 'animate-reveal-up',
    left: 'animate-reveal-left',
    right: 'animate-reveal-right',
    fade: 'animate-reveal-fade',
    scale: 'animate-reveal-scale',
  }[direction];

  return (
    <Tag
      ref={ref as any}
      className={cn(
        'reveal-hidden',
        isVisible && animClass,
        className,
      )}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
