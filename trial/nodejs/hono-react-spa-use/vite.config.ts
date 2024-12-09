import devServer from '@hono/vite-dev-server';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: './app/client.tsx',
          output: {
            entryFileNames: 'client.js',
          },
        },
      },
    };
  }
  return {
    clearScreen: false,
    server: {
      port: 8080,
      strictPort: true,
    },
    plugins: [devServer({ entry: './app/server.tsx', injectClientScript: false })],
  };
});
