import React, { type HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  fallback: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, fallback, size = 'md', style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-full bg-[var(--aptly-primary-bg)] text-[var(--aptly-primary)] font-bold aptly-hardware overflow-hidden",
          className
        )}
        style={{
          width: size === 'sm' ? 'var(--aptly-h-sm)' : size === 'lg' ? 'var(--aptly-h-lg)' : 'var(--aptly-h-md)',
          height: size === 'sm' ? 'var(--aptly-h-sm)' : size === 'lg' ? 'var(--aptly-h-lg)' : 'var(--aptly-h-md)',
          fontSize: size === 'sm' ? 'calc(10px * var(--aptly-font-scale))' : size === 'lg' ? 'calc(16px * var(--aptly-font-scale))' : 'calc(13px * var(--aptly-font-scale))',
          ...style
        }}
        {...props}
      >
        {src ? (
          <img src={src} alt={fallback} className="h-full w-full object-cover" />
        ) : (
          <span>{fallback.substring(0, 2).toUpperCase()}</span>
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";
