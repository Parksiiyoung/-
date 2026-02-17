import React from 'react';
import { cn } from '../../lib/utils';

interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Tag({ children, active, onClick, className }: TagProps) {
  const Tag = onClick ? 'button' : 'span';
  return (
    <Tag
      onClick={onClick}
      className={cn(
        'font-mono text-[10px] uppercase tracking-[0.12em] px-3 py-1.5 transition-all duration-300 ease-out-expo',
        active
          ? 'bg-text-primary text-bg'
          : 'bg-transparent text-text-secondary border border-border-subtle hover:border-text-primary hover:text-text-primary',
        onClick && 'cursor-pointer',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
