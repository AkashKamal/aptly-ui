import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '../utils';

const Drawer = DialogPrimitive.Root;

const DrawerTrigger = DialogPrimitive.Trigger;

const DrawerPortal = DialogPrimitive.Portal;

const DrawerClose = DialogPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DrawerOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { position?: 'left' | 'right' | 'bottom' }
>(({ className, children, position = 'right', ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 bg-[var(--aptly-surface)] shadow-[var(--aptly-shadow-lg)] transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 aptly-hardware outline-none",
        {
          "inset-y-0 left-0 h-full w-[var(--aptly-drawer-w)] min-w-[var(--aptly-drawer-w)] border-r border-[var(--aptly-border-light)] data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left": position === 'left',
          "inset-y-0 right-0 h-full w-[var(--aptly-drawer-w)] min-w-[var(--aptly-drawer-w)] border-l border-[var(--aptly-border-light)] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right": position === 'right',
          "inset-x-0 bottom-0 min-h-[50vh] max-h-[90vh] border-t border-[var(--aptly-border-light)] rounded-t-[var(--aptly-radius-lg)] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom": position === 'bottom',
        },
        className
      )}
      style={{
        padding: 'var(--aptly-pad-lg)'
      }}
      {...props}
    >
      <div className="h-full overflow-y-auto">
        {children}
      </div>
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--aptly-border-focus)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-[var(--aptly-text-secondary)]">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = DialogPrimitive.Content.displayName;

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left mb-4",
      className
    )}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4",
      className
    )}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "font-bold leading-none tracking-tight text-[var(--aptly-text)]",
      className
    )}
    style={{ fontSize: 'calc(1.125rem * var(--aptly-font-scale))' }}
    {...props}
  />
));
DrawerTitle.displayName = DialogPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-[var(--aptly-text-secondary)]", className)}
    style={{ fontSize: 'calc(0.875rem * var(--aptly-font-scale))' }}
    {...props}
  />
));
DrawerDescription.displayName = DialogPrimitive.Description.displayName;

// Legacy component for simple AI use
function DrawerLegacy({ isOpen, onClose, position = 'right', children }: { isOpen: boolean, onClose: () => void, position?: 'left' | 'right' | 'bottom', children: React.ReactNode }) {
  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent position={position}>
        {children}
      </DrawerContent>
    </Drawer>
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerLegacy
};
