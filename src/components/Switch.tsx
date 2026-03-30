import React from 'react';
import { cn } from '../utils';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id, ...props }, ref) => {
    const switchId = id || Math.random().toString(36).substring(7);
    
    return (
      <div className="flex items-center gap-3">
        <label
          htmlFor={switchId}
          className={cn(
            "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-[var(--aptly-transition)] focus-within:ring-4 focus-within:ring-[var(--aptly-border-focus)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--aptly-bg)] shadow-inner",
            props.checked ? "bg-[var(--aptly-primary)]" : "bg-[var(--aptly-border)]",
            props.disabled && "cursor-not-allowed opacity-50",
            className
          )}
        >
          <input
            type="checkbox"
            id={switchId}
            ref={ref}
            className="peer sr-only"
            {...props}
          />
          <span
            className={cn(
              "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[var(--aptly-shadow-sm)] ring-0 transition-transform duration-[var(--aptly-transition)]",
              props.checked ? "translate-x-5" : "translate-x-[2px]"
            )}
          />
        </label>
        {label && (
          <span className="text-sm font-medium text-[var(--aptly-text)] select-none">
            {label}
          </span>
        )}
      </div>
    );
  }
);
Switch.displayName = "Switch";
