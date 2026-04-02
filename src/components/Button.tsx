import React, { type ButtonHTMLAttributes } from 'react';
import { cn } from '../utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost' | 'glass' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'default' | 'pill' | 'square';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', size = 'md', shape = 'default', fullWidth, style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-semibold tracking-tight aptly-hardware transition-all duration-[var(--aptly-transition)] outline-none select-none disabled:opacity-40 disabled:pointer-events-none",
          fullWidth && "w-full",
          // SHAPES
          {
            "rounded-[var(--aptly-radius)]": shape === 'default',
            "rounded-[var(--aptly-radius-full)]": shape === 'pill',
            "rounded-[var(--aptly-radius-sm)]": shape === 'square',
          },
          // VARIANTS
          {
            "bg-[var(--aptly-primary)] text-white shadow-[var(--aptly-shadow-sm)] hover:shadow-[var(--aptly-shadow-md)] active:scale-[0.98]": variant === 'solid',
            "bg-transparent border border-[var(--aptly-border)] text-[var(--aptly-text)] hover:bg-[var(--aptly-bg)]": variant === 'outline',
            "bg-transparent text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-primary-bg)] hover:text-[var(--aptly-primary)]": variant === 'ghost',
            "bg-[var(--aptly-bg)] text-[var(--aptly-text)] hover:bg-[var(--aptly-primary-bg)] border border-[var(--aptly-border-light)]": variant === 'neutral',
            "aptly-glass text-[var(--aptly-text)]": variant === 'glass',
          },
          className
        )}
        style={{
          height: size === 'sm' ? 'var(--aptly-h-sm)' : size === 'lg' ? 'var(--aptly-h-lg)' : 'var(--aptly-h-md)',
          paddingLeft: 'var(--aptly-pad-md)',
          paddingRight: 'var(--aptly-pad-md)',
          fontSize: 'calc(0.875rem * var(--aptly-font-scale))',
          ...style
        }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
