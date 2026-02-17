import React from 'react';
import { cn } from '../../lib/utils';

interface DividerProps {
  className?: string;
  withLine?: boolean;
}

export function Divider({ className, withLine = false }: DividerProps) {
  return (
    <div className={cn('py-section', className)}>
      {withLine && <div className="border-t border-border-subtle" />}
    </div>
  );
}
