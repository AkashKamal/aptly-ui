import React, { useState } from 'react';
import { cn } from '../utils';

export interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export function Tooltip({ children, content, position = 'top', delay = 200, className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  // Mutable ref bypass for simple timeout logic in react
  let timeout: ReturnType<typeof setTimeout>;

  const show = () => {
    timeout = setTimeout(() => setIsVisible(true), delay);
  };
  
  const hide = () => {
    clearTimeout(timeout);
    setIsVisible(false);
  };

  return (
    <div 
      className={cn("relative inline-flex", className)} 
      onMouseEnter={show} 
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {isVisible && (
        <div 
          className={cn(
             "absolute z-50 px-2.5 py-1.5 text-[11px] font-semibold tracking-wide text-white bg-gray-900 rounded-[var(--aptly-radius-sm)] shadow-[var(--aptly-shadow-md)] whitespace-nowrap aptly-hardware pointer-events-none animate-in fade-in zoom-in-95 duration-[150ms]",
             {
                "bottom-full left-1/2 -translate-x-1/2 mb-2": position === 'top',
                "top-full left-1/2 -translate-x-1/2 mt-2": position === 'bottom',
                "right-full top-1/2 -translate-y-1/2 mr-2": position === 'left',
                "left-full top-1/2 -translate-y-1/2 ml-2": position === 'right',
             }
          )}
        >
          {content}
          
          {/* Arrow */}
          <div className={cn("absolute w-2 h-2 bg-gray-900 transform rotate-45", {
             "bottom-[-4px] left-1/2 -translate-x-1/2": position === 'top',
             "top-[-4px] left-1/2 -translate-x-1/2": position === 'bottom',
             "right-[-4px] top-1/2 -translate-y-1/2": position === 'left',
             "left-[-4px] top-1/2 -translate-y-1/2": position === 'right',
          })} />
        </div>
      )}
    </div>
  );
}
