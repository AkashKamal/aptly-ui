import React, { InputHTMLAttributes } from 'react';
import { cn } from '../utils';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  size?: 'sm' | 'md' | 'lg';
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, size = 'md', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="range"
        className={cn(
          "w-full appearance-none bg-transparent cursor-pointer aptly-hardware focus:outline-none",
          
          // Track
          "[&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[var(--aptly-border)] [&::-webkit-slider-runnable-track]:transition-colors",
          {
             "[&::-webkit-slider-runnable-track]:h-1": size === 'sm',
             "[&::-webkit-slider-runnable-track]:h-2": size === 'md',
             "[&::-webkit-slider-runnable-track]:h-3": size === 'lg',
          },
          
          // Thumb
          "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--aptly-surface)] [&::-webkit-slider-thumb]:border-[1.5px] [&::-webkit-slider-thumb]:border-[var(--aptly-border-focus)] [&::-webkit-slider-thumb]:shadow-[var(--aptly-shadow-md)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:ease-[var(--aptly-ease-spring)] [&::-webkit-slider-thumb]:hover:scale-110",
          {
             "[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:-mt-1.5": size === 'sm',
             "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:-mt-1.5": size === 'md',
             "[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:-mt-1.5": size === 'lg',
          },
          
          // Focus
          "focus-visible:[&::-webkit-slider-thumb]:ring-[var(--aptly-ring-width)] focus-visible:[&::-webkit-slider-thumb]:ring-offset-2 focus-visible:[&::-webkit-slider-thumb]:ring-offset-[var(--aptly-bg)] focus-visible:[&::-webkit-slider-thumb]:ring-[var(--aptly-border-focus)]",
          
          className
        )}
        {...props}
      />
    );
  }
);
Slider.displayName = "Slider";
