import React, { useState } from 'react';
import { cn } from '../utils';
import { Avatar } from './Avatar';
import { ChevronDown, LogOut, User, Settings } from 'lucide-react';

export interface ProfileProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  email: string;
  avatarSrc?: string;
}

export const Profile = React.forwardRef<HTMLButtonElement, ProfileProps>(
  ({ className, name, email, avatarSrc, style, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative">
        <button
          ref={ref as any}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center text-left hover:bg-[var(--aptly-bg)] transition-all duration-[var(--aptly-transition)] rounded-[var(--aptly-radius)] outline-none select-none",
            className
          )}
          style={{
            padding: 'var(--aptly-pad-xs)',
            gap: 'var(--aptly-pad-sm)',
            ...style
          }}
          {...props}
        >
          <Avatar fallback={name} src={avatarSrc} size="sm" />
          <div className="hidden md:block overflow-hidden">
            <p className="font-bold truncate leading-tight" style={{ fontSize: 'calc(0.875rem * var(--aptly-font-scale))' }}>{name}</p>
            <p className="text-[var(--aptly-text-muted)] truncate leading-tight" style={{ fontSize: 'calc(0.75rem * var(--aptly-font-scale))' }}>{email}</p>
          </div>
          <ChevronDown size={14} className={cn("text-[var(--aptly-text-muted)] transition-transform", isOpen && "rotate-180")} />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-[var(--aptly-surface)] border border-[var(--aptly-border-light)] rounded-[var(--aptly-radius)] shadow-[var(--aptly-shadow-lg)] z-50 py-1 animate-in fade-in zoom-in-95 duration-200">
             <div className="px-4 py-2 border-b border-[var(--aptly-border-light)] mb-1">
                <p className="font-bold text-sm truncate">{name}</p>
                <p className="text-xs text-[var(--aptly-text-muted)] truncate">{email}</p>
             </div>
             <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-bg)] transition-colors">
                <User size={14} /> My Profile
             </button>
             <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-bg)] transition-colors">
                <Settings size={14} /> Settings
             </button>
             <div className="h-px bg-[var(--aptly-border-light)] my-1" />
             <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors">
                <LogOut size={14} /> Sign Out
             </button>
          </div>
        )}
      </div>
    );
  }
);
Profile.displayName = "Profile";
