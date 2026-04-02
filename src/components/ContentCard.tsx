import React, { type HTMLAttributes } from 'react';
import { cn } from '../utils';
import { useAptlyTheme } from './ThemeProvider';

export interface ContentCardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: 1 | 2 | 3;
  interactive?: boolean;
}

export const ContentCard = React.forwardRef<HTMLDivElement, ContentCardProps>(
  ({ className, elevation = 1, interactive = false, style, ...props }, ref) => {
    const theme = useAptlyTheme();
    const isGlass = theme?.cardStyle === 'glass';
    const isFlat = theme?.cardStyle === 'flat';
    
    return (
      <div
        ref={ref}
        className={cn(
          "aptly-hardware transition-all duration-[var(--aptly-transition)] overflow-hidden",
          isGlass ? "aptly-glass border-0" : "bg-[var(--aptly-surface)] shadow-[inset_0_0_0_0.5px_var(--aptly-border-light)]",
          isFlat && !isGlass && "shadow-none bg-transparent border border-[var(--aptly-border)]",
          !isFlat && !isGlass && {
            "shadow-[var(--aptly-shadow-sm)]": elevation === 1,
            "shadow-[var(--aptly-shadow-md)]": elevation === 2,
            "shadow-[var(--aptly-shadow-lg)]": elevation === 3,
            "hover:-translate-y-1 hover:shadow-[var(--aptly-shadow-md)] cursor-pointer": interactive,
          },
          className
        )}
        style={{
          borderRadius: 'var(--aptly-radius-lg)',
          padding: 'var(--aptly-pad-lg)',
          ...style
        }}
        {...props}
      />
    );
  }
);
ContentCard.displayName = "ContentCard";
