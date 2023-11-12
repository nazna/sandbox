import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  clearScreen: false,
  server: {
    port: 8080,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: 'envf-core',
      remotes: {
        hello: 'http://localhost:8081/assets/hello.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
