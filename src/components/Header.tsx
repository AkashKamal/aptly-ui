import React, { HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  sticky?: boolean;
}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, sticky = true, children, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "flex items-center justify-between px-6 h-16 w-full bg-[var(--aptly-surface)] border-b border-[var(--aptly-border-light)] z-40 transition-shadow duration-[var(--aptly-transition)]",
          sticky ? "sticky top-0 shadow-[var(--aptly-shadow-sm)]" : "relative",
          className
        )}
        {...props}
      >
        {children}
      </header>
    );
  }
);
Header.displayName = "Header";
