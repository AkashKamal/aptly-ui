import React, { useState } from 'react';
import { cn } from '../utils';

export interface TabItem {
  id: string;
  label: string;
  content?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  variant?: 'underline' | 'pill' | 'vertical';
  defaultValue?: string;
  className?: string;
  onChange?: (id: string) => void;
}

export function Tabs({ tabs, variant = 'underline', defaultValue, className, onChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.id);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if(onChange) onChange(id);
  };

  return (
    <div className={cn("flex w-full", variant === 'vertical' ? "flex-row gap-8" : "flex-col", className)}>
      
      {/* Tab List */}
      <div 
         className={cn(
             "relative flex", 
             variant === 'vertical' ? "flex-col border-r border-[var(--aptly-border-light)] min-w-[200px]" : "flex-row",
             variant === 'underline' && !variant.includes('vertical') ? "border-b border-[var(--aptly-border-light)]" : "",
             variant === 'pill' ? "bg-[var(--aptly-bg)] p-1 rounded-[var(--aptly-radius-md)] inline-flex w-max" : ""
         )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors duration-[var(--aptly-transition)] outline-none rounded-[var(--aptly-radius-sm)] aptly-hardware select-none",
              // Pill Variant styling
              variant === 'pill' && activeTab === tab.id ? "bg-[var(--aptly-surface)] text-[var(--aptly-text)] shadow-[var(--aptly-shadow-sm)]" : "",
              variant === 'pill' && activeTab !== tab.id ? "text-[var(--aptly-text-secondary)] hover:text-[var(--aptly-text)]" : "",
              
              // Underline & Vertical styling
              (variant === 'underline' || variant === 'vertical') && activeTab === tab.id ? "text-[var(--aptly-primary)]" : "",
              (variant === 'underline' || variant === 'vertical') && activeTab !== tab.id ? "text-[var(--aptly-text-secondary)] hover:text-[var(--aptly-text)] hover:bg-[var(--aptly-bg)]" : "",
              
              variant === 'vertical' && "mb-1 text-left w-full"
            )}
          >
            <span className="relative z-10">{tab.label}</span>
            
            {/* Animated Indicators */}
            {(variant === 'underline' || variant === 'vertical') && activeTab === tab.id && (
              <span 
                 className={cn(
                    "absolute bg-[var(--aptly-primary)] z-0 rounded-full",
                    variant === 'underline' ? "bottom-[-1px] left-0 h-[2px] w-full" : "right-[-1px] top-0 w-[2px] h-full"
                 )} 
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={cn("pt-4 flex-1 animate-in fade-in duration-300", variant === 'vertical' ? "pt-0" : "")}>
        {tabs.find(t => t.id === activeTab)?.content}
      </div>

    </div>
  );
}
