import React, { InputHTMLAttributes } from 'react';
import { cn } from '../utils';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || Math.random().toString(36).substring(7);
    
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-[var(--aptly-text)] tracking-tight ml-1">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "flex h-12 w-full rounded-[var(--aptly-radius)] border border-[var(--aptly-border)] bg-transparent px-4 text-[15px] text-[var(--aptly-text)] transition-all duration-[var(--aptly-transition)] focus-visible:outline-none focus:border-transparent focus:ring-[2px] focus:ring-[var(--aptly-border-focus)] disabled:cursor-not-allowed disabled:bg-[var(--aptly-bg)] disabled:opacity-50 placeholder:text-[var(--aptly-text-muted)]",
              error && "border-[var(--aptly-error)] focus:border-transparent focus:ring-[var(--aptly-error)] text-[var(--aptly-error)]",
              className
            )}
            {...props}
          />
        </div>
        {error ? (
          <p className="text-sm font-medium text-[var(--aptly-error)] mt-1 ml-1">{error}</p>
        ) : helperText ? (
          <p className="text-sm text-[var(--aptly-text-secondary)] mt-1 ml-1">{helperText}</p>
        ) : null}
      </div>
    );
  }
);
TextInput.displayName = "TextInput";
