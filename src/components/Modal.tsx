import React, { useEffect } from 'react';
import { cn } from '../utils';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  variant?: 'alert' | 'standard' | 'fullscreen';
  blurOverlay?: boolean;
}

export function Modal({ isOpen, onClose, title, children, variant = 'standard', blurOverlay = true }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
       document.body.style.overflow = 'hidden';
    } else {
       document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Overlay Backdrop */}
      <div 
        className={cn(
          "absolute inset-0 bg-black/40 transition-opacity duration-[var(--aptly-transition)] animate-in fade-in z-0",
          blurOverlay && "backdrop-blur-md"
        )}
        onClick={onClose}
      />
      
      {/* Modal Content container */}
      <div 
        className={cn(
          "relative z-10 bg-[var(--aptly-surface)] rounded-[var(--aptly-radius-lg)] shadow-[var(--aptly-shadow-lg)] border border-[var(--aptly-border-light)] p-[var(--aptly-pad-lg)] aptly-hardware animate-in fade-in zoom-in-95 duration-[var(--aptly-speed)] ease-out",
          {
            "max-w-sm w-full": variant === 'alert',
            "max-w-xl w-full": variant === 'standard',
            "max-w-[95vw] h-[95vh] flex flex-col": variant === 'fullscreen',
          }
        )}
        role="dialog"
      >
        {title && (
          <h2 className="text-xl font-bold mb-4 tracking-tight">{title}</h2>
        )}
        <div className={cn("flex-1", variant === 'fullscreen' && "overflow-y-auto pr-2")}>
          {children}
        </div>
      </div>
    </div>
  );
}
