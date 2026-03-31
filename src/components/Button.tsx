import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '../utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'default' | 'pill' | 'square';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', size = 'md', shape = 'default', fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-medium tracking-tight overflow-hidden select-none outline-none focus-visible:ring-[var(--aptly-ring-width)] focus-visible:ring-[var(--aptly-border-focus)] focus-visible:ring-offset-[var(--aptly-ring-offset)] aptly-hardware",
          fullWidth && "w-full",
          // Sizing using dynamic density scale vars
          {
            "h-8 px-3 text-xs": size === 'sm',
            "h-10 px-[var(--aptly-pad-md)] text-sm": size === 'md',
            "h-[3.25rem] px-[var(--aptly-pad-lg)] text-base": size === 'lg',
          },
          // Shape Options
          {
            "rounded-[var(--aptly-radius)]": shape === 'default',
            "rounded-[var(--aptly-radius-full)]": shape === 'pill',
            "rounded-[var(--aptly-radius-sm)]": shape === 'square',
          },
          // Elegant Variants
          {
            "bg-[var(--aptly-primary)] text-white hover:bg-[var(--aptly-primary-hover)] active:scale-[0.97] shadow-[var(--aptly-shadow-sm)] hover:shadow-[var(--aptly-shadow-md)] transition-all duration-[var(--aptly-transition)]": variant === 'solid',
            "bg-transparent text-[var(--aptly-text)] box-shadow-[inset_0_0_0_1px_var(--aptly-border)] hover:bg-[var(--aptly-bg)] active:scale-[0.97] transition-all duration-[var(--aptly-transition)]": variant === 'outline',
            "bg-transparent text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-primary-bg)] hover:text-[var(--aptly-text)] active:scale-[0.97] transition-all duration-[var(--aptly-transition)]": variant === 'ghost',
            "aptly-glass text-[var(--aptly-text)] hover:shadow-[var(--aptly-shadow-md)] active:scale-[0.97] transition-all duration-[var(--aptly-transition)]": variant === 'glass',
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
