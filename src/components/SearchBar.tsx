import React, { type InputHTMLAttributes } from 'react';
import { Search } from 'lucide-react';
import { cn } from '../utils';

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  iconPosition?: 'left' | 'right';
  shortcut?: string;
  inputSize?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'glass' | 'minimal';
}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, iconPosition = 'left', shortcut, inputSize = 'md', variant = 'solid', style, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center w-full", className)}>
        {iconPosition === 'left' && (
          <div className="absolute left-3 z-10 text-[var(--aptly-text-muted)] pointer-events-none flex items-center justify-center">
            <Search size={18} strokeWidth={2.5} style={{ transform: 'scale(var(--aptly-font-scale))' }} />
          </div>
        )}
        
        <input
          ref={ref}
          type="search"
          placeholder="Search..."
          className={cn(
            "w-full rounded-[var(--aptly-radius-full)] font-medium aptly-hardware transition-all duration-[var(--aptly-transition)] focus:border-transparent focus:ring-[var(--aptly-ring-width)] focus:ring-[var(--aptly-border-focus)] placeholder:text-[var(--aptly-text-muted)] outline-none",
            {
               "bg-[var(--aptly-surface)] shadow-[inset_0_0_0_1px_var(--aptly-border-light)]": variant === 'solid',
               "aptly-glass border-none shadow-none focus:bg-[rgba(255,255,255,0.9)]": variant === 'glass',
               "bg-[var(--aptly-bg)] border-none shadow-none focus:bg-[var(--aptly-surface)] focus:shadow-[var(--aptly-shadow-sm)]": variant === 'minimal'
            },
            iconPosition === 'left' ? "pl-10" : "pl-4",
            shortcut ? "pr-14" : "pr-4"
          )}
          style={{
            height: inputSize === 'sm' ? 'var(--aptly-h-sm)' : inputSize === 'lg' ? 'var(--aptly-h-lg)' : 'var(--aptly-h-md)',
            fontSize: 'calc(0.875rem * var(--aptly-font-scale))',
            ...style
          }}
          {...props}
        />
        
        {shortcut && (
          <div className="absolute right-3 bg-[var(--aptly-bg)] text-[var(--aptly-text-muted)] px-1.5 py-[2px] rounded-[var(--aptly-radius-sm)] border border-[var(--aptly-border-light)] z-10 pointer-events-none font-bold" style={{ fontSize: 'calc(10px * var(--aptly-font-scale))'}}>
            {shortcut}
          </div>
        )}
      </div>
    );
  }
);
SearchBar.displayName = "SearchBar";
