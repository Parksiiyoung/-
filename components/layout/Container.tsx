import React from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('w-full max-w-site mx-auto px-6 md:px-10 lg:px-16', className)}>
      {children}
    </Tag>
  );
}
