import React, { InputHTMLAttributes } from 'react';
import { cn } from '../utils';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: 'check' | 'dot';
  inputSize?: 'sm' | 'md' | 'lg';
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, variant = 'check', inputSize = 'md', id, ...props }, ref) => {
    const inputId = id || Math.random().toString(36).substring(7);
    
    return (
      <div className="flex items-center gap-3">
        <label htmlFor={inputId} className="relative flex items-center justify-center cursor-pointer group">
          <input
            type="checkbox"
            id={inputId}
            ref={ref}
            className="peer sr-only"
            {...props}
          />
          <div 
            className={cn(
               "aptly-hardware flex items-center justify-center rounded-[var(--aptly-radius-sm)] border-[1.5px] border-[var(--aptly-border-focus)] bg-[var(--aptly-surface)] transition-all duration-[150ms] peer-focus-visible:ring-[var(--aptly-ring-width)] peer-focus-visible:ring-[var(--aptly-border-focus)] peer-focus-visible:ring-offset-2 peer-checked:bg-[var(--aptly-primary)] peer-checked:border-[var(--aptly-primary)] peer-disabled:opacity-50 peer-disabled:cursor-not-allowed group-hover:shadow-[var(--aptly-shadow-sm)]",
               {
                  "w-4 h-4": inputSize === 'sm',
                  "w-5 h-5": inputSize === 'md',
                  "w-6 h-6": inputSize === 'lg',
               },
               variant === 'dot' && "rounded-full",
               className
            )}
          >
            {variant === 'check' ? (
              <svg className="w-full h-full text-white scale-0 transition-transform duration-[200ms] peer-checked:scale-100 ease-[var(--aptly-ease-spring)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            ) : (
              <div className="w-1/2 h-1/2 rounded-full bg-white scale-0 transition-transform duration-[200ms] peer-checked:scale-100 ease-[var(--aptly-ease-spring)]" />
            )}
          </div>
        </label>
        {label && (
          <label htmlFor={inputId} className={cn("font-medium text-[var(--aptly-text)] select-none cursor-pointer", inputSize === 'sm' && "text-xs", inputSize === 'md' && "text-sm", inputSize === 'lg' && "text-base")}>
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
