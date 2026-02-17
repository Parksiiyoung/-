import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'group card-hover',
        onClick && 'cursor-pointer',
        className,
      )}
    >
      {children}
    </div>
  );
}
