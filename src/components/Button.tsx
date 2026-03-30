import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '../utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-medium tracking-tight transition-all duration-[var(--aptly-transition)] overflow-hidden select-none outline-none focus-visible:ring-4 focus-visible:ring-[var(--aptly-border-focus)] focus-visible:ring-offset-2",
          // Sizing with softer padding
          {
            "h-9 px-4 text-xs rounded-[var(--aptly-radius-sm)]": size === 'sm',
            "h-11 px-6 text-sm rounded-[var(--aptly-radius)]": size === 'md',
            "h-14 px-8 text-base rounded-[var(--aptly-radius-lg)]": size === 'lg',
          },
          // Elegant Variants
          {
            "bg-[var(--aptly-primary)] text-white hover:bg-[var(--aptly-primary-hover)] active:scale-[0.98] shadow-[var(--aptly-shadow-sm)] hover:shadow-[var(--aptly-shadow-md)] border border-transparent": variant === 'solid',
            "bg-transparent text-[var(--aptly-text)] border border-[var(--aptly-border)] hover:border-[#888] active:scale-[0.98]": variant === 'outline',
            "bg-transparent text-[var(--aptly-text-secondary)] border border-transparent hover:bg-[var(--aptly-primary-bg)] hover:text-[var(--aptly-text)] active:scale-[0.98]": variant === 'ghost',
          },
          "disabled:opacity-40 disabled:pointer-events-none disabled:active:scale-100",
          className
        )}
        style={{ fontFamily: 'var(--aptly-font-body, inherit)' }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
