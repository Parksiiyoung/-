import React from 'react';
import { cn } from '../../lib/utils';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'textarea';
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
  rows?: number;
}

export function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required,
  className,
  rows = 5,
}: FormFieldProps) {
  const baseInputClass = 'w-full bg-transparent border-b border-border-subtle focus:border-text-primary outline-none py-3 font-body text-body text-text-primary placeholder:text-text-tertiary transition-colors duration-300';

  return (
    <div className={cn('group', className)}>
      <label
        htmlFor={name}
        className="block font-mono text-caption uppercase text-text-tertiary mb-2 group-focus-within:text-text-primary transition-colors"
      >
        {label}{required && ' *'}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          rows={rows}
          className={cn(baseInputClass, 'resize-none')}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={baseInputClass}
        />
      )}
    </div>
  );
}
