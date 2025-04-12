import { exec } from 'node:child_process';
import { resolve } from 'node:path';
import devServer from '@hono/vite-dev-server';
import { type Plugin, defineConfig } from 'vite';
import { watchAndRun } from 'vite-plugin-watch-and-run';

const setup = (): Plugin => {
  return {
    name: 'vite-plugin-setup',
    buildStart: () => {
      exec('npm run build');
    },
  };
};

export default defineConfig({
  clearScreen: false,
  plugins: [
    setup(),
    watchAndRun([
      {
        name: 'unocss',
        logs: ['trigger'],
        watchKind: ['add', 'change', 'unlink'],
        watch: resolve(import.meta.dirname, 'src/**/*.tsx'),
        run: 'npm run unocss',
      },
    ]),
    devServer({
      entry: 'src/main.tsx',
      injectClientScript: false,
    }),
  ],
});
