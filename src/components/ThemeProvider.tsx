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
  /* Hyper-Elegant Additions */
  density?: 'compact' | 'comfortable' | 'spacious';
  cardStyle?: 'solid' | 'glass' | 'flat';
  focusRingStyle?: 'subtle' | 'bold' | 'none';
  animationSpeed?: 'instant' | 'fast' | 'fluid';
};

const ThemeContext = createContext<AptlyThemeConfig | null>(null);

function loadGoogleFont(fontName: string) {
  if (!fontName) return;
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
    if (config.surface) {
      root.style.setProperty('--aptly-surface', config.surface);
      // Rough glass approximation assuming light surfaces for now, can be complex rgb parsing
    }
    if (config.bg) root.style.setProperty('--aptly-bg', config.bg);
    if (config.text) root.style.setProperty('--aptly-text', config.text);
    if (config.radius) root.style.setProperty('--aptly-radius', config.radius);
    
    // Density Mapping
    if (config.density === 'compact') root.style.setProperty('--aptly-spacing-scale', '0.75');
    else if (config.density === 'spacious') root.style.setProperty('--aptly-spacing-scale', '1.25');
    else root.style.setProperty('--aptly-spacing-scale', '1');

    // Animation Speed Mapping
    if (config.animationSpeed === 'instant') root.style.setProperty('--aptly-speed', '0ms');
    else if (config.animationSpeed === 'fast') root.style.setProperty('--aptly-speed', '150ms');
    else root.style.setProperty('--aptly-speed', '400ms'); // fluid default
    
    // Focus Ring
    if (config.focusRingStyle === 'bold') root.style.setProperty('--aptly-ring-width', '4px');
    else if (config.focusRingStyle === 'none') root.style.setProperty('--aptly-ring-width', '0px');
    else root.style.setProperty('--aptly-ring-width', '2px'); // subtle

    if (config.fontFamily) {
      loadGoogleFont(config.fontFamily);
      root.style.setProperty('--aptly-font-body', `"${config.fontFamily}", system-ui, -apple-system, sans-serif`);
    }
  }, [config]);

  // We explicitly wrap children in a root div injecting specific contextual styling based on global configs
  // This allows pure-react features like Context to dictate structural CSS
  return (
    <ThemeContext.Provider value={config}>
      <div className={`aptly-theme-root aptly-card-${config.cardStyle || 'solid'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useAptlyTheme = () => useContext(ThemeContext);
