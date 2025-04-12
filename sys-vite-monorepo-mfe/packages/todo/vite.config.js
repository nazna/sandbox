import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  clearScreen: false,
  plugins: [react()],
  build: {
    manifest: 'manifest.json',
    rollupOptions: {
      input: resolve(__dirname, 'src/todo.tsx'),
      preserveEntrySignatures: 'strict',
      external: ['react', 'react-dom'],
    },
  },
});
