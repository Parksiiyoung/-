import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'font-mono text-caption uppercase tracking-[0.12em] inline-flex items-center justify-center transition-all duration-300 ease-out-expo disabled:opacity-40 disabled:pointer-events-none',
        variant === 'primary' && 'bg-text-primary text-bg hover:bg-accent',
        variant === 'ghost' && 'bg-transparent text-text-primary hover:bg-text-primary/5',
        variant === 'outline' && 'bg-transparent text-text-primary border border-border-subtle hover:border-text-primary',
        size === 'sm' && 'px-4 py-2 text-[10px]',
        size === 'md' && 'px-6 py-3',
        size === 'lg' && 'px-8 py-4 text-[12px]',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
