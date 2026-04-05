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

/**
 * All CSS variable keys that ThemeProvider may set on :root.
 * Used for cleanup on unmount to prevent stale tokens.
 */
const MANAGED_CSS_VARS = [
  '--aptly-primary',
  '--aptly-surface',
  '--aptly-bg',
  '--aptly-text',
  '--aptly-radius',
  '--aptly-radius-sm',
  '--aptly-radius-lg',
  '--aptly-scale',
  '--aptly-font-scale',
  '--aptly-speed',
  '--aptly-font-body',
  '--aptly-ring-width',
  '--aptly-ring-offset',
] as const;

export function ThemeProvider({ config = {}, children }: { config?: AptlyThemeConfig, children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;

    // === Core Colors ===
    if (config.primary) root.style.setProperty('--aptly-primary', config.primary);
    if (config.surface) root.style.setProperty('--aptly-surface', config.surface);
    if (config.bg) root.style.setProperty('--aptly-bg', config.bg);
    if (config.text) root.style.setProperty('--aptly-text', config.text);

    // === Radius Override ===
    if (config.radius) {
      const radiusNum = parseInt(config.radius, 10);
      root.style.setProperty('--aptly-radius', config.radius);
      root.style.setProperty('--aptly-radius-sm', `${Math.max(4, radiusNum - 4)}px`);
      root.style.setProperty('--aptly-radius-lg', `${radiusNum + 4}px`);
    }

    // === Density Scaling ===
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

    // === Animation Speed ===
    if (config.animationSpeed === 'instant') root.style.setProperty('--aptly-speed', '0ms');
    else if (config.animationSpeed === 'fast') root.style.setProperty('--aptly-speed', '150ms');
    else root.style.setProperty('--aptly-speed', '400ms');

    // === Focus Ring Style ===
    if (config.focusRingStyle === 'bold') {
      root.style.setProperty('--aptly-ring-width', '3px');
      root.style.setProperty('--aptly-ring-offset', '3px');
    } else if (config.focusRingStyle === 'none') {
      root.style.setProperty('--aptly-ring-width', '0px');
      root.style.setProperty('--aptly-ring-offset', '0px');
    } else {
      // 'subtle' (default)
      root.style.setProperty('--aptly-ring-width', '2px');
      root.style.setProperty('--aptly-ring-offset', '2px');
    }

    // === Font Family ===
    if (config.fontFamily) {
      root.style.setProperty('--aptly-font-body', `"${config.fontFamily}", system-ui, sans-serif`);
    }

    // Cleanup: remove all managed CSS variables when provider unmounts
    return () => {
      MANAGED_CSS_VARS.forEach(v => root.style.removeProperty(v));
    };
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
