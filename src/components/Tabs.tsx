import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../utils';

const TabsContext = React.createContext<{ variant: 'underline' | 'pill' | 'vertical' }>({
  variant: 'underline',
});

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & { variant?: 'underline' | 'pill' | 'vertical' }
>(({ className, variant = 'underline', ...props }, ref) => (
  <TabsContext.Provider value={{ variant }}>
    <TabsPrimitive.Root
      ref={ref}
      className={cn(
        "flex w-full",
        variant === 'vertical' ? "flex-row" : "flex-col",
        className
      )}
      style={{ 
        gap: variant === 'vertical' ? 'var(--aptly-pad-xl)' : '0' 
      }}
      {...props}
    />
  </TabsContext.Provider>
));
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(TabsContext);
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "relative flex",
        variant === 'vertical' ? "flex-col border-r border-[var(--aptly-border-light)]" : "flex-row",
        variant === 'underline' && "border-b border-[var(--aptly-border-light)]",
        variant === 'pill' && "bg-[var(--aptly-bg)] p-1 rounded-[var(--aptly-radius-md)] inline-flex w-max",
        className
      )}
      style={{
        minWidth: variant === 'vertical' ? 'calc(12rem * var(--aptly-scale))' : 'auto'
      }}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(TabsContext);
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "relative font-semibold transition-colors duration-[var(--aptly-transition)] outline-none rounded-[var(--aptly-radius-sm)] aptly-hardware select-none group",
        "text-[var(--aptly-text-secondary)] hover:text-[var(--aptly-text)] hover:bg-[var(--aptly-bg)]",
        "data-[state=active]:text-[var(--aptly-primary)]",
        variant === 'pill' && "data-[state=active]:bg-[var(--aptly-surface)] data-[state=active]:text-[var(--aptly-text)] data-[state=active]:shadow-[var(--aptly-shadow-sm)]",
        variant === 'vertical' && "mb-1 text-left w-full",
        className
      )}
      style={{
        paddingLeft: 'var(--aptly-pad-md)',
        paddingRight: 'var(--aptly-pad-md)',
        paddingTop: 'var(--aptly-pad-sm)',
        paddingBottom: 'var(--aptly-pad-sm)',
        fontSize: 'calc(0.875rem * var(--aptly-font-scale))',
      }}
      {...props}
    >
      <span className="relative z-10">{props.children}</span>
      {(variant === 'underline' || variant === 'vertical') && (
        <span 
          className={cn(
            "absolute bg-[var(--aptly-primary)] z-0 rounded-full hidden group-data-[state=active]:block",
            variant === 'underline' ? "bottom-[-1px] left-0 h-[2px] w-full" : "right-[-1px] top-0 w-[2px] h-full"
          )} 
        />
      )}
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "flex-1 animate-in fade-in duration-300 focus-visible:outline-none",
      className
    )}
    style={{ paddingTop: 'var(--aptly-pad-md)' }}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// Adding sub-components to the main Tabs component for convenience
const TabsExtended = Tabs as typeof Tabs & {
  List: typeof TabsList;
  Trigger: typeof TabsTrigger;
  Content: typeof TabsContent;
};

TabsExtended.List = TabsList;
TabsExtended.Trigger = TabsTrigger;
TabsExtended.Content = TabsContent;

export { TabsExtended as Tabs, TabsList, TabsTrigger, TabsContent };
