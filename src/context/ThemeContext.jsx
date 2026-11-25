import React, { createContext, useContext, useState, useEffect } from 'react';

export const updateFavicons = (isBrowserDark = null) => {
  if (typeof document === 'undefined') return;

  const isDark = typeof isBrowserDark === 'boolean'
    ? isBrowserDark
    : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const targetSvg = isDark ? '/favicon-white.svg' : '/favicon-black.svg';
  const targetPng = isDark ? '/favicon-white.png' : '/favicon-black.png';

  const updateLink = (id, rel, type, href) => {
    const oldLink = document.getElementById(id);
    const newLink = document.createElement('link');
    newLink.id = id;
    newLink.rel = rel;
    if (type) newLink.type = type;
    newLink.href = href;
    if (oldLink && oldLink.parentNode) {
      oldLink.parentNode.replaceChild(newLink, oldLink);
    } else {
      document.head.appendChild(newLink);
    }
  };

  updateLink('favicon-svg', 'icon', 'image/svg+xml', targetSvg);
  updateLink('favicon-fallback', 'icon', 'image/png', targetPng);
  updateLink('apple-touch-icon', 'apple-touch-icon', 'image/png', targetPng);
};

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('lfd_theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    const isDark = newTheme === 'dark';
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
      document.body.style.backgroundColor = '#0D0D0D';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.colorScheme = 'light';
      document.body.style.backgroundColor = '#FFFFFF';
    }
    // Tab favicon always adapts to the browser/OS theme so it remains clearly visible
    updateFavicons();
  };

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('lfd_theme', newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    applyTheme(theme);

    const mediaQuery = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    if (!mediaQuery) return;

    // Synchronize favicon with browser color scheme on mount
    updateFavicons(mediaQuery.matches);

    const handleBrowserSchemeChange = (e) => {
      // Browser theme changed -> update tab favicon
      updateFavicons(e.matches);

      const stored = localStorage.getItem('lfd_theme');
      if (!stored) {
        const systemTheme = e.matches ? 'dark' : 'light';
        setThemeState(systemTheme);
        applyTheme(systemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleBrowserSchemeChange);
    return () => mediaQuery.removeEventListener('change', handleBrowserSchemeChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
