/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['text', 'json-summary'],
      exclude: [
        'node_modules/',
        'src/setupTests.ts',
        'src/index.tsx',
        'src/globals.d.ts',
        'src/react-app-env.d.ts',
        'src/reportWebVitals.ts',
        'src/components/atoms/CoinFountain',
        'src/styles/defaults/fonts.ts',
        'src/utils/imgLoader.ts',
        'src/**/types.ts',
      ],
    },
  },
});
