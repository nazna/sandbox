import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  clearScreen: false,
  server: {
    port: 8081,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: 'envf-hello',
      filename: 'hello.js',
      shared: ['react', 'react-dom'],
      exposes: {
        './Hello': './src/hello.tsx',
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
