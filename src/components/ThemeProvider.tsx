import React, { createContext, useContext, useEffect } from 'react';

export type AptlyThemeConfig = {
  primary?: string;
  surface?: string;
  bg?: string;
  text?: string;
  radius?: string;
  fontFamily?: string;
  borderWidth?: string;
  shadowHover?: string;
};

const ThemeContext = createContext<AptlyThemeConfig | null>(null);

function loadGoogleFont(fontName: string) {
  if (!fontName) return;
  
  // Standard free web-safe fallback or standard sans don't need fetching
  const noFetchFonts = ['Inter', 'system-ui', 'sans-serif', 'Arial', 'Helvetica', '-apple-system', 'Segoe UI'];
  if (noFetchFonts.includes(fontName)) return;

  const fontId = `aptly-font-${fontName.replace(/\s+/g, '-')}`;
  if (document.getElementById(fontId)) return;

  const link = document.createElement('link');
  link.id = fontId;
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/\s+/g, '+')}:wght@400;500;600;700&display=swap`;
  document.head.appendChild(link);
}

export function ThemeProvider({ config = {}, children }: { config?: AptlyThemeConfig, children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    if (config.primary) root.style.setProperty('--aptly-primary', config.primary);
    if (config.surface) root.style.setProperty('--aptly-surface', config.surface);
    if (config.bg) root.style.setProperty('--aptly-bg', config.bg);
    if (config.text) root.style.setProperty('--aptly-text', config.text);
    if (config.radius) root.style.setProperty('--aptly-radius', config.radius);
    if (config.borderWidth) root.style.setProperty('--aptly-border-width', config.borderWidth);
    if (config.shadowHover) root.style.setProperty('--aptly-shadow-md', config.shadowHover);
    
    if (config.fontFamily) {
      loadGoogleFont(config.fontFamily);
      root.style.setProperty('--aptly-font-body', `"${config.fontFamily}", system-ui, -apple-system, sans-serif`);
    }
  }, [config]);

  return <ThemeContext.Provider value={config}>{children}</ThemeContext.Provider>;
}

export const useAptlyTheme = () => useContext(ThemeContext);
