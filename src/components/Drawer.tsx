import React, { useEffect } from 'react';
import { cn } from '../utils';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right' | 'bottom';
  children: React.ReactNode;
}

export function Drawer({ isOpen, onClose, position = 'right', children }: DrawerProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex overflow-hidden">
      {/* Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-[var(--aptly-transition)] animate-in fade-in"
        onClick={onClose}
      />
      
      {/* Drawer Content */}
      <div 
        className={cn(
          "relative bg-[var(--aptly-surface)] shadow-[var(--aptly-shadow-lg)] border-[var(--aptly-border-light)] p-[var(--aptly-pad-lg)] aptly-hardware transition-transform duration-[var(--aptly-speed)] ease-[var(--aptly-ease-spring)]",
          {
             "w-full max-w-md h-full border-r animate-in slide-in-from-left": position === 'left',
             "w-full max-w-md h-full ml-auto border-l animate-in slide-in-from-right": position === 'right',
             "w-full min-h-[50vh] max-h-[90vh] mt-auto border-t rounded-t-[var(--aptly-radius-lg)] animate-in slide-in-from-bottom": position === 'bottom',
          }
        )}
      >
        <div className="h-full overflow-y-auto pr-2">
           {children}
        </div>
      </div>
    </div>
  );
}
