import build from '@hono/vite-build/node';
import devServer from '@hono/vite-dev-server';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: './src/client.tsx',
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
    plugins: [build(), devServer({ entry: './src/index.tsx', injectClientScript: false })],
  };
});
