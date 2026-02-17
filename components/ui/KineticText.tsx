import React, { useMemo } from 'react';
import { useScrollReveal } from '../../lib/hooks';
import { cn } from '../../lib/utils';

interface KineticTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  className?: string;
  charDelay?: number;
  startDelay?: number;
}

export function KineticText({
  text,
  as: Tag = 'h1',
  className,
  charDelay = 30,
  startDelay = 0,
}: KineticTextProps) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  const words = useMemo(() => text.split(' '), [text]);

  let charIndex = 0;

  return (
    <Tag ref={ref as any} className={cn('overflow-hidden', className)} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split('').map((char) => {
            const i = charIndex++;
            return (
              <span
                key={`${wi}-${i}`}
                className="inline-block overflow-hidden"
              >
                <span
                  className={cn(
                    'inline-block',
                    isVisible ? 'animate-char-reveal' : 'translate-y-full opacity-0',
                  )}
                  style={{ animationDelay: `${startDelay + i * charDelay}ms` }}
                >
                  {char}
                </span>
              </span>
            );
          })}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
