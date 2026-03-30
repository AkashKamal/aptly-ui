import React, { HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'neutral' | 'primary';
  appearance?: 'soft' | 'solid';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'neutral', appearance = 'soft', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-[0.02em]",
          {
            "bg-[var(--aptly-primary-bg)] text-[var(--aptly-primary)]": variant === 'primary' && appearance === 'soft',
            "bg-[var(--aptly-primary)] text-white": variant === 'primary' && appearance === 'solid',
            
            "bg-[#E6F4EA] text-[#1E8E3E]": variant === 'success' && appearance === 'soft',
            "bg-[#1E8E3E] text-white": variant === 'success' && appearance === 'solid',
            
            "bg-[#FEF7E0] text-[#E37400]": variant === 'warning' && appearance === 'soft',
            "bg-[#F9AB00] text-white": variant === 'warning' && appearance === 'solid',
            
            "bg-[#FCE8E6] text-[#D93025]": variant === 'error' && appearance === 'soft',
            "bg-[#D93025] text-white": variant === 'error' && appearance === 'solid',
            
            "bg-[#F1F3F4] text-[#3C4043]": variant === 'neutral' && appearance === 'soft',
            "bg-[#5F6368] text-white": variant === 'neutral' && appearance === 'solid',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";
