import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { reactRenderer } from '@hono/react-renderer';
import { Hono } from 'hono';
import { App } from './app';

export const app = new Hono();

app.use(
  '/static/*',
  serveStatic({
    root: './dist',
    rewriteRequestPath: (path) => path.replace(/^\/static/, ''),
  }),
);

app.get(
  '*',
  reactRenderer(
    ({ children }) => {
      const devScript = import.meta.env.DEV ? (
        <>
          <script
            type="module"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: development mode only
            dangerouslySetInnerHTML={{
              __html: `
                import RefreshRuntime from \"/@react-refresh\";
                RefreshRuntime.injectIntoGlobalHook(window);
                window.$RefreshReg$ = () => {};
                window.$RefreshSig$ = () => (type) => type;
                window.__vite_plugin_react_preamble_installed__ = true;
              `,
            }}
          />
          <script type="module" src="/@vite/client" />
        </>
      ) : undefined;
      const clientSrc = import.meta.env.PROD ? '/static/client/entry-client.js' : '/src/entry-client.tsx';

      return (
        <html lang="ja">
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
            <title>vite-ssr</title>
            {devScript}
          </head>
          <body>
            <div id="root">{children}</div>
            <script type="module" src={clientSrc} />
          </body>
        </html>
      );
    },
    { docType: true },
  ),
);

app.get('/', async (c) => {
  return c.render(<App />);
});

if (import.meta.env.PROD) {
  serve(app, (info) => console.log(`Server is running on http://localhost:${info.port}`));
}
