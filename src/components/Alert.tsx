import * as React from "react";
import { cn } from "../utils";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive" | "success" | "warning";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const Icon = {
      default: Info,
      destructive: AlertCircle,
      success: CheckCircle,
      warning: AlertTriangle,
    }[variant];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative w-full rounded-[var(--aptly-radius)] border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
          {
            "bg-[var(--aptly-bg)] text-[var(--aptly-text)] border-[var(--aptly-border)]": variant === "default",
            "border-[var(--aptly-error)] text-[var(--aptly-error)] bg-[var(--aptly-error)]/5 [&>svg]:text-[var(--aptly-error)]": variant === "destructive",
            "border-[var(--aptly-success)] text-[var(--aptly-success)] bg-[var(--aptly-success)]/5 [&>svg]:text-[var(--aptly-success)]": variant === "success",
            "border-[var(--aptly-warning)] text-[var(--aptly-warning)] bg-[var(--aptly-warning)]/5 [&>svg]:text-[var(--aptly-warning)]": variant === "warning",
          },
          className
        )}
        {...props}
      >
        <Icon className="h-4 w-4" />
        {children}
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed opacity-90", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
