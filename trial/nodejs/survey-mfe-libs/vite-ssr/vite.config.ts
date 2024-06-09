import type { IncomingMessage, ServerResponse } from 'node:http';
import { getRequestListener } from '@hono/node-server';
import react from '@vitejs/plugin-react';
import { type Connect, type PluginOption, defineConfig } from 'vite';

const excludes: RegExp[] = [/.*\.tsx$/, /^\/@.+$/, /^\/node_modules\/.*/];

const devServer = (): PluginOption => ({
  name: 'hono-node-server-adapter',
  configureServer(server) {
    server.middlewares.use(async (req: IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
      for (const pattern of excludes) {
        if (req.url && pattern.test(req.url)) {
          return next();
        }
      }

      const { app } = await server.ssrLoadModule('./src/entry-server.tsx');

      getRequestListener((req) => app.fetch(req))(req, res);
    });
  },
});

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['./src/entry-client.tsx'],
          output: {
            entryFileNames: '[name].js',
          },
        },
      },
    };
  }

  return {
    clearScreen: false,
    plugins: [react(), devServer()],
  };
});
