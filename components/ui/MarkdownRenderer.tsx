import React, { useMemo } from 'react';
import { marked } from 'marked';
import { cn } from '../../lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const html = useMemo(() => {
    return marked.parse(content, { async: false }) as string;
  }, [content]);

  return (
    <div
      className={cn(
        'prose-custom font-body text-body text-text-primary leading-relaxed',
        '[&_h1]:font-display [&_h1]:text-page-title [&_h1]:mb-6 [&_h1]:mt-12',
        '[&_h2]:font-display [&_h2]:text-section-title [&_h2]:mb-4 [&_h2]:mt-10',
        '[&_h3]:font-display [&_h3]:text-lg [&_h3]:font-medium [&_h3]:mb-3 [&_h3]:mt-8',
        '[&_p]:mb-6 [&_p]:max-w-reading',
        '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2',
        '[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2',
        '[&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-text-secondary',
        '[&_blockquote]:border-l-2 [&_blockquote]:border-text-primary [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-text-secondary [&_blockquote]:my-8',
        '[&_img]:w-full [&_img]:my-8',
        '[&_code]:font-mono [&_code]:text-[0.85em] [&_code]:bg-bg-dark [&_code]:px-1.5 [&_code]:py-0.5',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
