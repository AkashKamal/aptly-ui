import React, { createContext, useContext, useEffect } from 'react';
import { TooltipProvider } from './Tooltip';

export type AptlyThemeConfig = {
  primary?: string;
  surface?: string;
  bg?: string;
  text?: string;
  radius?: string;
  fontFamily?: string;
  density?: 'compact' | 'comfortable' | 'spacious';
  cardStyle?: 'solid' | 'glass' | 'flat';
  focusRingStyle?: 'subtle' | 'bold' | 'none';
  animationSpeed?: 'instant' | 'fast' | 'fluid';
};

const ThemeContext = createContext<AptlyThemeConfig | null>(null);

export function ThemeProvider({ config = {}, children }: { config?: AptlyThemeConfig, children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    if (config.primary) root.style.setProperty('--aptly-primary', config.primary);
    if (config.surface) root.style.setProperty('--aptly-surface', config.surface);
    if (config.bg) root.style.setProperty('--aptly-bg', config.bg);
    if (config.text) root.style.setProperty('--aptly-text', config.text);
    if (config.radius) root.style.setProperty('--aptly-radius', config.radius);
    
    // Unified Scaling
    if (config.density === 'compact') {
      root.style.setProperty('--aptly-scale', '0.75');
      root.style.setProperty('--aptly-font-scale', '0.85');
    } else if (config.density === 'spacious') {
      root.style.setProperty('--aptly-scale', '1.25');
      root.style.setProperty('--aptly-font-scale', '1.1');
    } else {
      root.style.setProperty('--aptly-scale', '1');
      root.style.setProperty('--aptly-font-scale', '1');
    }

    if (config.animationSpeed === 'instant') root.style.setProperty('--aptly-speed', '0ms');
    else if (config.animationSpeed === 'fast') root.style.setProperty('--aptly-speed', '150ms');
    else root.style.setProperty('--aptly-speed', '400ms');
    
    if (config.fontFamily) {
      root.style.setProperty('--aptly-font-body', `"${config.fontFamily}", system-ui, sans-serif`);
    }
  }, [config]);

  return (
    <ThemeContext.Provider value={config}>
      <TooltipProvider>
        <div className={`aptly-theme-root aptly-card-${config.cardStyle || 'solid'}`}>
          {children}
        </div>
      </TooltipProvider>
    </ThemeContext.Provider>
  );
}

export const useAptlyTheme = () => useContext(ThemeContext);
