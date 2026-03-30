import React, { InputHTMLAttributes } from 'react';
import { Search } from 'lucide-react';
import { cn } from '../utils';

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  iconPosition?: 'left' | 'right';
  shortcut?: string;
}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, iconPosition = 'left', shortcut, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center w-full max-w-md", className)}>
        {iconPosition === 'left' && (
          <div className="absolute left-3 md:left-4 z-10 text-[var(--aptly-text-muted)] pointer-events-none">
            <Search size={18} strokeWidth={2} />
          </div>
        )}
        <input
          ref={ref}
          type="search"
          placeholder="Search..."
          className={cn(
            "h-11 md:h-12 w-full rounded-full border border-[var(--aptly-border-light)] bg-[var(--aptly-surface)] text-sm md:text-[15px] font-medium transition-all duration-[var(--aptly-transition)] focus:border-transparent focus:ring-[3px] focus:ring-[var(--aptly-border-focus)] placeholder:text-[var(--aptly-text-muted)] shadow-[var(--aptly-shadow-sm)] hover:shadow-[var(--aptly-shadow-md)] flex-1",
            iconPosition === 'left' ? "pl-10 md:pl-12 pr-12 md:pr-16" : "pl-5 pr-12 md:pr-20"
          )}
          {...props}
        />
        {iconPosition === 'right' && (
          <div className="absolute right-3 md:right-4 z-10 text-[var(--aptly-text-muted)] pointer-events-none">
            <Search size={18} strokeWidth={2} />
          </div>
        )}
        {shortcut && (
          <div className="absolute right-3 md:right-4 bg-[var(--aptly-bg)] text-[var(--aptly-text-muted)] px-2 py-0.5 md:py-1 rounded-[var(--aptly-radius-sm)] text-[10px] md:text-xs font-semibold tracking-widest leading-none border border-[var(--aptly-border-light)] pointer-events-none shadow-inner z-10">
            {shortcut}
          </div>
        )}
      </div>
    );
  }
);
SearchBar.displayName = "SearchBar";
