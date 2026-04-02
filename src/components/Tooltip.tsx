import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../utils';

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & { sideOffset?: number, position?: 'top' | 'bottom' | 'left' | 'right' }
>(({ className, sideOffset = 4, position = 'top', ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    side={position}
    sideOffset={sideOffset}
    className={cn(
      "z-[9999] overflow-hidden rounded-[var(--aptly-radius-sm)] bg-[var(--aptly-primary)] px-3 py-1.5 font-semibold text-white shadow-[var(--aptly-shadow-md)] aptly-hardware animate-in fade-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    style={{
      fontSize: 'calc(11px * var(--aptly-font-scale))',
      paddingLeft: 'var(--aptly-pad-sm)',
      paddingRight: 'var(--aptly-pad-sm)',
      paddingTop: 'calc(0.25rem * var(--aptly-scale))',
      paddingBottom: 'calc(0.25rem * var(--aptly-scale))'
    }}
    {...props}
  >
    {props.children}
    <TooltipPrimitive.Arrow className="fill-[var(--aptly-primary)]" />
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// Legacy support for the simple API
export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

/**
 * Tooltip component for showing contextual information.
 * Supports both simple API (via props) and Radix-style composable API.
 */
export function Tooltip({ content, children, position = 'top', className }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent position={position} className={className}>
          {content}
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
}

export { 
  TooltipRoot, 
  TooltipTrigger, 
  TooltipContent, 
  TooltipProvider,
  Tooltip as TooltipSimple 
};

export default Tooltip;
