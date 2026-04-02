import React, { type InputHTMLAttributes } from 'react';
import { cn } from '../utils';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, label, error, helperText, id, style, ...props }, ref) => {
    const inputId = id || Math.random().toString(36).substring(7);
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={inputId} className="font-semibold text-[var(--aptly-text)] tracking-tight ml-1" style={{ fontSize: 'calc(0.875rem * var(--aptly-font-scale))'}}>
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <input
            id={inputId}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : (helperText ? helperId : undefined)}
            className={cn(
              "flex w-full rounded-[var(--aptly-radius)] border border-[var(--aptly-border)] bg-transparent text-[var(--aptly-text)] transition-all duration-[var(--aptly-transition)] focus-visible:outline-none focus:border-transparent focus:ring-[var(--aptly-ring-width)] focus:ring-[var(--aptly-border-focus)] disabled:cursor-not-allowed disabled:bg-[var(--aptly-bg)] disabled:opacity-50 placeholder:text-[var(--aptly-text-muted)]",
              error && "border-[var(--aptly-error)] focus:ring-[var(--aptly-error)] text-[var(--aptly-error)]",
              className
            )}
            style={{
              height: 'var(--aptly-h-md)',
              paddingLeft: 'var(--aptly-pad-md)',
              paddingRight: 'var(--aptly-pad-md)',
              fontSize: 'calc(0.9375rem * var(--aptly-font-scale))',
              ...style
            }}
            {...props}
          />
        </div>
        {error ? (
          <p id={errorId} className="font-semibold text-[var(--aptly-error)] mt-1 ml-1" style={{ fontSize: 'calc(0.8125rem * var(--aptly-font-scale))'}}>{error}</p>
        ) : helperText ? (
          <p id={helperId} className="text-[var(--aptly-text-secondary)] mt-1 ml-1" style={{ fontSize: 'calc(0.8125rem * var(--aptly-font-scale))'}}>{helperText}</p>
        ) : null}
      </div>
    );
  }
);
TextInput.displayName = "TextInput";
