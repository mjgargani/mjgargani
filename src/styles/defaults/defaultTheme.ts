/**
 * Default Theme Configuration
 * 
 * Provides consistent styling values across all components.
 * Theme is injected via ThemeProvider from styled-components.
 */

export const defaultTheme = {
  common: {
    border: {
      radius: '0.5rem', // 8px - consistent rounded corners
    },
  },
};

export type Theme = typeof defaultTheme;
