import React, { HTMLAttributes, useState } from 'react';
import { Avatar } from './Avatar';
import { cn } from '../utils';
import { ChevronDown, LogOut, Settings, User } from 'lucide-react';

export interface ProfileProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  email: string;
  avatarSrc?: string;
}

export const Profile = React.forwardRef<HTMLDivElement, ProfileProps>(
  ({ className, name, email, avatarSrc, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <div 
        ref={ref} 
        className={cn("relative inline-block", className)} 
        {...props}
      >
        <button 
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 p-1.5 md:p-2 pr-2 md:pr-4 rounded-full md:rounded-[var(--aptly-radius-full)] hover:bg-[var(--aptly-bg)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--aptly-border-focus)] border border-transparent hover:border-[var(--aptly-border-light)] min-w-0"
        >
          <Avatar src={avatarSrc} fallback={name} size="md" className="shadow-sm border border-[var(--aptly-border-light)] shrink-0" />
          <div className="hidden md:flex flex-col items-start text-left shrink truncate">
            <span className="text-sm font-semibold text-[var(--aptly-text)] leading-tight truncate w-full">{name}</span>
            <span className="text-xs text-[var(--aptly-text-muted)] leading-tight truncate w-full">{email}</span>
          </div>
          <ChevronDown size={16} className={`text-[var(--aptly-text-muted)] hidden md:block shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-56 bg-[var(--aptly-surface)] rounded-[var(--aptly-radius-lg)] shadow-[var(--aptly-shadow-lg)] border border-[var(--aptly-border-light)] py-2 z-50 origin-top-right transition-all animate-in fade-in zoom-in-95 duration-200">
            <div className="px-4 py-3 border-b border-[var(--aptly-border-light)]">
              <p className="text-sm font-semibold text-[var(--aptly-text)] truncate">{name}</p>
              <p className="text-xs font-medium text-[var(--aptly-text-secondary)] truncate">{email}</p>
            </div>
            <div className="py-2">
              <button className="flex w-full items-center gap-3 px-4 py-2 text-sm text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-bg)] hover:text-[var(--aptly-text)] transition-colors">
                <User size={16} /> My Account
              </button>
              <button className="flex w-full items-center gap-3 px-4 py-2 text-sm text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-bg)] hover:text-[var(--aptly-text)] transition-colors">
                <Settings size={16} /> Preferences
              </button>
            </div>
            <div className="py-2 border-t border-[var(--aptly-border-light)]">
              <button className="flex w-full items-center gap-3 px-4 py-2 text-sm text-[var(--aptly-error)] hover:bg-[var(--aptly-error)] hover:bg-opacity-10 transition-colors">
                <LogOut size={16} /> Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
);
Profile.displayName = "Profile";
