import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "../utils";

const ToggleGroupContext = React.createContext<{
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline";
}>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
  }
>(({ className, variant = "default", size = "default", children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
  }
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--aptly-radius-sm)] text-sm font-medium transition-colors hover:bg-[var(--aptly-primary-bg)] hover:text-[var(--aptly-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--aptly-primary)] data-[state=on]:text-white",
        {
          "bg-transparent": (variant || context.variant) === "default",
          "border border-[var(--aptly-border)] bg-transparent hover:bg-[var(--aptly-bg)]": (variant || context.variant) === "outline",
        },
        {
          "h-9 px-3": (size || context.size) === "default",
          "h-8 px-2": (size || context.size) === "sm",
          "h-10 px-3": (size || context.size) === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
