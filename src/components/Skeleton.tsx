import React, { HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'text', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "animate-pulse bg-[var(--aptly-border-light)]",
          {
            "rounded-[var(--aptly-radius-sm)] h-4 w-3/4": variant === 'text',
            "rounded-full h-12 w-12": variant === 'circular',
            "rounded-[var(--aptly-radius-lg)] h-24 w-full": variant === 'rectangular',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";
