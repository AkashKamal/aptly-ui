import React, { HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface ContentCardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: 1 | 2 | 3;
  interactive?: boolean;
}

export const ContentCard = React.forwardRef<HTMLDivElement, ContentCardProps>(
  ({ className, elevation = 1, interactive = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[var(--aptly-surface)] rounded-[var(--aptly-radius-lg)] border border-[var(--aptly-border-light)] transition-all duration-[var(--aptly-transition)] overflow-hidden p-8",
          {
            "shadow-[var(--aptly-shadow-sm)]": elevation === 1,
            "shadow-[var(--aptly-shadow-md)]": elevation === 2,
            "shadow-[var(--aptly-shadow-lg)]": elevation === 3,
            "hover:-translate-y-1 hover:shadow-[var(--aptly-shadow-md)] cursor-pointer": interactive && elevation === 1,
            "hover:-translate-y-1 hover:shadow-[var(--aptly-shadow-lg)] cursor-pointer": interactive && elevation === 2,
          },
          className
        )}
        {...props}
      />
    );
  }
);
ContentCard.displayName = "ContentCard";
