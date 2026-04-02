import React, { type HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, collapsed = false, children, style, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "flex flex-col bg-[var(--aptly-surface)] border-r border-[var(--aptly-border-light)] transition-all duration-[var(--aptly-transition)] overflow-hidden shrink-0",
          className
        )}
        style={{
          width: collapsed ? 'var(--aptly-sidebar-w-collapsed)' : 'var(--aptly-sidebar-w)',
          minWidth: collapsed ? 'var(--aptly-sidebar-w-collapsed)' : 'var(--aptly-sidebar-w)',
          ...style
        }}
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
  ({ className, active, icon, collapsed, children, style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center w-full outline-none transition-all duration-[var(--aptly-transition)] rounded-[var(--aptly-radius-sm)] select-none",
          active 
            ? "bg-[var(--aptly-primary-bg)] text-[var(--aptly-primary)] font-semibold" 
            : "text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-bg)] hover:text-[var(--aptly-text)]",
          collapsed && "justify-center",
          className
        )}
        style={{
          padding: 'var(--aptly-pad-md)',
          gap: 'var(--aptly-pad-sm)',
          fontSize: 'calc(0.875rem * var(--aptly-font-scale))',
          ...style
        }}
        {...props}
      >
        {icon && <span className={cn("shrink-0 flex items-center justify-center", active ? "text-[var(--aptly-primary)]" : "text-[var(--aptly-text-muted)]")}>{icon}</span>}
        {!collapsed && <span className="truncate tracking-tight">{children}</span>}
      </button>
    );
  }
);
SidebarItem.displayName = "SidebarItem";
