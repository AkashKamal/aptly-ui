import React, { type InputHTMLAttributes } from 'react';
import { cn } from '../utils';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: 'check' | 'dot';
  inputSize?: 'sm' | 'md' | 'lg';
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, variant = 'check', inputSize = 'md', id, style, ...props }, ref) => {
    const inputId = id || Math.random().toString(36).substring(7);
    
    const sizeVar = inputSize === 'sm' ? 'calc(1rem * var(--aptly-scale))' : inputSize === 'lg' ? 'calc(1.5rem * var(--aptly-scale))' : 'calc(1.25rem * var(--aptly-scale))';

    return (
      <div className="flex items-center gap-3" style={{ gap: 'var(--aptly-pad-sm)' }}>
        <div className="relative flex items-center justify-center group h-fit">
          <input
            type="checkbox"
            id={inputId}
            ref={ref}
            className="peer sr-only"
            {...props}
          />
          <label 
            htmlFor={inputId}
            className={cn(
               "aptly-hardware flex items-center justify-center border-[1.5px] border-[var(--aptly-border-focus)] bg-[var(--aptly-surface)] cursor-pointer transition-all duration-[150ms] peer-focus-visible:ring-[var(--aptly-ring-width)] peer-focus-visible:ring-[var(--aptly-border-focus)] peer-focus-visible:ring-offset-2 peer-checked:bg-[var(--aptly-primary)] peer-checked:border-[var(--aptly-primary)] peer-disabled:opacity-50 peer-disabled:cursor-not-allowed group-hover:shadow-[var(--aptly-shadow-sm)]",
               variant === 'dot' ? "rounded-full" : "rounded-[var(--aptly-radius-sm)]",
               className
            )}
            style={{
              width: sizeVar,
              height: sizeVar,
              ...style
            }}
          >
            {variant === 'check' ? (
              <svg className="w-full h-full text-white scale-0 transition-transform duration-[200ms] peer-checked:scale-100 ease-[var(--aptly-ease-spring)] p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            ) : (
              <div className="w-1/2 h-1/2 rounded-full bg-white scale-0 transition-transform duration-[200ms] peer-checked:scale-100 ease-[var(--aptly-ease-spring)]" />
            )}
          </label>
        </div>
        {label && (
          <label htmlFor={inputId} className="font-semibold text-[var(--aptly-text)] select-none cursor-pointer" style={{ fontSize: 'calc(0.875rem * var(--aptly-font-scale))' }}>
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
