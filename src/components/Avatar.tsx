import React from 'react';
import { cn } from '../utils';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Avatar({ src, fallback, size = 'md', className, ...props }: AvatarProps) {
  const [error, setError] = React.useState(false);

  return (
    <div
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-[var(--aptly-radius-full)] bg-[var(--aptly-primary-bg)] shadow-[var(--aptly-shadow-sm)]",
        {
          "h-8 w-8 text-xs": size === 'sm',
          "h-10 w-10 text-sm": size === 'md',
          "h-14 w-14 text-lg": size === 'lg',
        },
        className
      )}
      {...props}
    >
      {src && !error ? (
        <img
          src={src}
          onError={() => setError(true)}
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center font-semibold text-[var(--aptly-text-secondary)] tracking-tight">
          {fallback?.slice(0, 2).toUpperCase() || '?'}
        </span>
      )}
    </div>
  );
}
