import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../utils';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & { label?: string }
>(({ className, label, id, ...props }, ref) => {
  const switchId = id || React.useId();
  return (
    <div className="flex items-center" style={{ gap: 'var(--aptly-pad-sm)' }}>
      <SwitchPrimitive.Root
        className={cn(
          "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aptly-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--aptly-bg)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--aptly-primary)] data-[state=unchecked]:bg-[var(--aptly-border)] shadow-inner aptly-hardware",
          className
        )}
        style={{
          height: 'calc(1.5rem * var(--aptly-scale))',
          width: 'calc(2.75rem * var(--aptly-scale))',
        }}
        id={switchId}
        {...props}
        ref={ref}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "pointer-events-none block rounded-full bg-white shadow-[var(--aptly-shadow-sm)] ring-0 transition-transform data-[state=checked]:translate-x-[calc(1.25rem * var(--aptly-scale))] data-[state=unchecked]:translate-x-0"
          )}
          style={{
            height: 'calc(1.25rem * var(--aptly-scale))',
            width: 'calc(1.25rem * var(--aptly-scale))'
          }}
        />
      </SwitchPrimitive.Root>
      {label && (
        <label
          htmlFor={switchId}
          className="font-semibold text-[var(--aptly-text)] select-none cursor-pointer"
          style={{ fontSize: 'calc(0.875rem * var(--aptly-font-scale))' }}
        >
          {label}
        </label>
      )}
    </div>
  );
});
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
