import viteDevServer, { defaultOptions } from '@hono/vite-dev-server';
import { defineConfig } from 'vite';

export default defineConfig({
  clearScreen: false,
  server: {
    port: 8080,
  },
  optimizeDeps: {
    disabled: true,
  },
  plugins: [viteDevServer({ entry: './src/index.tsx', exclude: [...defaultOptions.exclude, /.*\.css$/, /.*\.svg$/] })],
});
