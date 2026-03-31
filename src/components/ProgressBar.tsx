import React from 'react';
import { cn } from '../utils';

export interface ProgressBarProps {
  value: number; // 0-100
  size?: 'sm' | 'md' | 'lg';
  variant?: 'linear' | 'circular';
  className?: string;
  color?: string;
}

export function ProgressBar({ value, size = 'md', variant = 'linear', color, className }: ProgressBarProps) {
  const percentage = Math.min(Math.max(value, 0), 100);
  
  if (variant === 'circular') {
     const sizes = { sm: 32, md: 48, lg: 64 };
     const strokeSizes = { sm: 3, md: 4, lg: 6 };
     const sz = sizes[size];
     const stroke = strokeSizes[size];
     const radius = (sz - stroke) / 2;
     const circumference = radius * 2 * Math.PI;
     const offset = circumference - (percentage / 100) * circumference;

     return (
        <svg width={sz} height={sz} className={cn("transform -rotate-90", className)}>
           <circle 
              className="text-[var(--aptly-border-light)]" 
              strokeWidth={stroke} 
              stroke="currentColor" 
              fill="transparent" 
              r={radius} 
              cx={sz/2} 
              cy={sz/2} 
           />
           <circle 
              className="text-[var(--aptly-primary)] transition-all duration-[var(--aptly-transition)] ease-[var(--aptly-ease-spring)]" 
              strokeWidth={stroke} 
              strokeDasharray={circumference} 
              strokeDashoffset={offset} 
              strokeLinecap="round" 
              stroke={color || "currentColor"} 
              fill="transparent" 
              r={radius} 
              cx={sz/2} 
              cy={sz/2} 
           />
        </svg>
     );
  }

  return (
    <div className={cn("w-full bg-[var(--aptly-border-light)] rounded-full overflow-hidden shadow-inner", {
       "h-1.5": size === 'sm',
       "h-3": size === 'md',
       "h-5": size === 'lg',
    }, className)}>
      <div 
        className="h-full bg-[var(--aptly-primary)] rounded-full transition-all duration-[1000ms] ease-out aptly-hardware"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      />
    </div>
  );
}
