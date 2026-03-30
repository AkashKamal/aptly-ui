import React, { HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, collapsed = false, children, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "flex flex-col bg-[var(--aptly-surface)] border-r border-[var(--aptly-border-light)] transition-all duration-[var(--aptly-transition)] overflow-hidden shrink-0",
          collapsed ? "w-20" : "w-64",
          className
        )}
        {...props}
      >
        {children}
      </aside>
    );
  }
);
Sidebar.displayName = "Sidebar";

export interface SidebarItemProps extends HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
  collapsed?: boolean;
}

export const SidebarItem = React.forwardRef<HTMLButtonElement, SidebarItemProps>(
  ({ className, active, icon, collapsed, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center gap-3 w-full px-4 py-3 mx-2 my-1 outline-none transition-all duration-[var(--aptly-transition)] rounded-[var(--aptly-radius-sm)] select-none",
          active 
            ? "bg-[var(--aptly-primary-bg)] text-[var(--aptly-primary)] font-medium" 
            : "text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-bg)] hover:text-[var(--aptly-text)]",
          collapsed && "justify-center px-0 mx-auto w-12",
          className
        )}
        {...props}
      >
        {icon && <span className={cn("shrink-0", active ? "text-[var(--aptly-primary)]" : "text-[var(--aptly-text-muted)]")}>{icon}</span>}
        {!collapsed && <span className="truncate tracking-tight">{children}</span>}
      </button>
    );
  }
);
SidebarItem.displayName = "SidebarItem";
