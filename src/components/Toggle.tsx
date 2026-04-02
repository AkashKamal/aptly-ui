import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "../utils";

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
  }
>(({ className, variant = "default", size = "default", ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-[var(--aptly-radius-sm)] text-sm font-medium transition-colors hover:bg-[var(--aptly-primary-bg)] hover:text-[var(--aptly-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--aptly-primary)] data-[state=on]:text-white",
      {
        "bg-transparent": variant === "default",
        "border border-[var(--aptly-border)] bg-transparent hover:bg-[var(--aptly-bg)]": variant === "outline",
      },
      {
        "h-9 px-3": size === "default",
        "h-8 px-2": size === "sm",
        "h-10 px-3": size === "lg",
      },
      className
    )}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
