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
     const baseSize = size === 'sm' ? 32 : size === 'lg' ? 64 : 48;
     const sz = `calc(${baseSize}px * var(--aptly-scale))`;
     
     // Circular needs more complex SVG scaling, keeping it simple for now with a fixed ratio
     return (
        <div style={{ width: sz, height: sz }} className={cn("relative", className)}>
           <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle 
                 className="text-[var(--aptly-border-light)]" 
                 strokeWidth="10" 
                 stroke="currentColor" 
                 fill="transparent" 
                 r="40" cx="50" cy="50" 
              />
              <circle 
                 className="text-[var(--aptly-primary)] transition-all duration-[var(--aptly-transition)]" 
                 strokeWidth="10" 
                 strokeDasharray="251.2" 
                 strokeDashoffset={251.2 - (percentage / 100) * 251.2} 
                 strokeLinecap="round" 
                 stroke={color || "currentColor"} 
                 fill="transparent" 
                 r="40" cx="50" cy="50" 
              />
           </svg>
        </div>
     );
  }

  return (
    <div className={cn("w-full bg-[var(--aptly-border-light)] rounded-full overflow-hidden shadow-inner", className)}
      style={{
        height: size === 'sm' ? 'calc(0.375rem * var(--aptly-scale))' : size === 'lg' ? 'calc(0.75rem * var(--aptly-scale))' : 'calc(0.5rem * var(--aptly-scale))',
      }}
    >
      <div 
        className="h-full bg-[var(--aptly-primary)] rounded-full transition-all duration-[1000ms] ease-out aptly-hardware"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      />
    </div>
  );
}
