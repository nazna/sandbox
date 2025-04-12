import { resolve } from 'node:path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  clearScreen: false,
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    manifest: 'manifest.json',
    rollupOptions: {
      input: resolve(__dirname, 'src/header.tsx'),
      preserveEntrySignatures: 'exports-only',
      external: ['react', 'react-dom'],
      output: {
        format: 'esm',
      },
    },
  },
});
