import React from 'react';
import { cn } from '../../lib/utils';

interface LoadingSpinnerProps {
  className?: string;
}

export function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return (
    <div className={cn('flex items-center justify-center py-20', className)}>
      <div className="w-5 h-5 border border-text-primary/30 border-t-text-primary rounded-full animate-spin" />
    </div>
  );
}
