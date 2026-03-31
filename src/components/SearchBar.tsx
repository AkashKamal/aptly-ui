import React, { InputHTMLAttributes } from 'react';
import { Search } from 'lucide-react';
import { cn } from '../utils';

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  iconPosition?: 'left' | 'right';
  shortcut?: string;
  inputSize?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'glass' | 'minimal';
}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, iconPosition = 'left', shortcut, inputSize = 'md', variant = 'solid', ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center w-full", className)}>
        {iconPosition === 'left' && (
          <div className="absolute left-3 z-10 text-[var(--aptly-text-muted)] pointer-events-none">
            <Search size={inputSize === 'sm' ? 14 : inputSize === 'lg' ? 20 : 18} strokeWidth={2} />
          </div>
        )}
        
        <input
          ref={ref}
          type="search"
          placeholder="Search..."
          className={cn(
            "w-full rounded-[var(--aptly-radius-full)] font-medium aptly-hardware transition-all duration-[var(--aptly-transition)] focus:border-transparent focus:ring-[var(--aptly-ring-width)] focus:ring-[var(--aptly-border-focus)] placeholder:text-[var(--aptly-text-muted)]",
            
            // Sizes
            {
               "h-8 text-[13px]": inputSize === 'sm',
               "h-10 text-sm": inputSize === 'md',
               "h-14 text-base": inputSize === 'lg',
            },
            
            // Variants
            {
               "bg-[var(--aptly-surface)] shadow-[inset_0_0_0_1px_var(--aptly-border-light)] hover:shadow-[var(--aptly-shadow-md)] focus:shadow-[var(--aptly-shadow-md)]": variant === 'solid',
               "aptly-glass border-none shadow-none focus:bg-[rgba(255,255,255,0.9)]": variant === 'glass',
               "bg-[var(--aptly-bg)] border-none shadow-none focus:bg-[var(--aptly-surface)] focus:shadow-[var(--aptly-shadow-sm)]": variant === 'minimal'
            },
            
            iconPosition === 'left' ? "pl-10 pr-12" : "pl-4 pr-10"
          )}
          {...props}
        />
        
        {iconPosition === 'right' && (
          <div className="absolute right-3 z-10 text-[var(--aptly-text-muted)] pointer-events-none">
            <Search size={inputSize === 'sm' ? 14 : inputSize === 'lg' ? 20 : 18} strokeWidth={2} />
          </div>
        )}
        
        {shortcut && (
          <div className="absolute right-3 bg-[var(--aptly-bg)] text-[var(--aptly-text-muted)] px-1.5 py-[2px] rounded-[var(--aptly-radius-sm)] text-[10px] font-semibold tracking-widest leading-none border border-[var(--aptly-border-light)] shadow-inner z-10 pointer-events-none">
            {shortcut}
          </div>
        )}
      </div>
    );
  }
);
SearchBar.displayName = "SearchBar";
