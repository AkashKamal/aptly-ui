import React, { type InputHTMLAttributes } from 'react';
import { cn } from '../utils';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, size = 'md', style, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center w-full group", className)} style={{ height: 'var(--aptly-h-sm)' }}>
        <input
          type="range"
          ref={ref}
          className={cn(
            "w-full bg-transparent appearance-none cursor-pointer aptly-hardware outline-none",
            // Custom styles for webkit slider thumb and track using our variables
            "[&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[var(--aptly-border)] [&::-webkit-slider-runnable-track]:transition-colors",
            "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[1.5px] [&::-webkit-slider-thumb]:border-[var(--aptly-border-focus)] [&::-webkit-slider-thumb]:bg-[var(--aptly-surface)] [&::-webkit-slider-thumb]:shadow-[var(--aptly-shadow-md)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:ease-[var(--aptly-ease-spring)] hover:[&::-webkit-slider-thumb]:scale-110",
            "focus-visible:[&::-webkit-slider-thumb]:ring-[var(--aptly-ring-width)] focus-visible:[&::-webkit-slider-thumb]:ring-[var(--aptly-border-focus)] focus-visible:[&::-webkit-slider-thumb]:ring-offset-2 focus-visible:[&::-webkit-slider-thumb]:ring-offset-[var(--aptly-bg)]"
          )}
          style={{
            ...style
          }}
          {...props}
        />
        {/* We use global styles for the heights since CSS-in-JS pseudo-selectors are complex */}
        <style dangerouslySetInnerHTML={{ __html: `
          input[type=range]::-webkit-slider-runnable-track { height: calc(${size === 'sm' ? 4 : size === 'lg' ? 12 : 8}px * var(--aptly-scale)); }
          input[type=range]::-webkit-slider-thumb { 
            height: calc(${size === 'sm' ? 16 : size === 'lg' ? 24 : 20}px * var(--aptly-scale)); 
            width: calc(${size === 'sm' ? 16 : size === 'lg' ? 24 : 20}px * var(--aptly-scale)); 
            margin-top: calc(${size === 'sm' ? -6 : size === 'lg' ? -6 : -6}px * var(--aptly-scale));
          }
        `}} />
      </div>
    );
  }
);
Slider.displayName = "Slider";
