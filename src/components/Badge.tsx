import React, { type HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'neutral' | 'primary';
  appearance?: 'solid' | 'soft' | 'outline';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'neutral', appearance = 'soft', style, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full font-bold tracking-wider uppercase select-none border",
          {
            "bg-[var(--aptly-primary)] text-white border-transparent": variant === 'primary' && appearance === 'solid',
            "bg-[var(--aptly-primary-bg)] text-[var(--aptly-primary)] border-transparent": variant === 'primary' && appearance === 'soft',
            
            "bg-[var(--aptly-success)] text-white border-transparent": variant === 'success' && appearance === 'solid',
            "bg-emerald-50 text-[var(--aptly-success)] border-emerald-100": variant === 'success' && appearance === 'soft',
            
            "bg-[var(--aptly-warning)] text-white border-transparent": variant === 'warning' && appearance === 'solid',
            "bg-amber-50 text-[var(--aptly-warning)] border-amber-100": variant === 'warning' && appearance === 'soft',
            
            "bg-[var(--aptly-error)] text-white border-transparent": variant === 'error' && appearance === 'solid',
            "bg-red-50 text-[var(--aptly-error)] border-red-100": variant === 'error' && appearance === 'soft',
            
            "bg-[var(--aptly-bg)] text-[var(--aptly-text-secondary)] border-[var(--aptly-border)]": variant === 'neutral',
          },
          className
        )}
        style={{
          paddingLeft: 'calc(0.6rem * var(--aptly-scale))',
          paddingRight: 'calc(0.6rem * var(--aptly-scale))',
          paddingTop: 'calc(0.15rem * var(--aptly-scale))',
          paddingBottom: 'calc(0.15rem * var(--aptly-scale))',
          fontSize: 'calc(10px * var(--aptly-font-scale))',
          lineHeight: '1',
          ...style
        }}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";
