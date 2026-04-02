import React, { type HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'rect' | 'circle' | 'text';
  width?: string | number;
  height?: string | number;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'rect', width, height, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "animate-pulse bg-[var(--aptly-border-light)] aptly-hardware",
          variant === 'circle' ? "rounded-full" : "rounded-[var(--aptly-radius-sm)]",
          className
        )}
        style={{
          width: width,
          height: height || (variant === 'text' ? '1em' : undefined),
          ...style
        }}
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";
