import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { html } from 'hono/html';
import { secureHeaders } from 'hono/secure-headers';
import { api } from './api';

const app = new Hono();

app.use(secureHeaders());
app.use(compress());

app.route('/api', api);

app.get('/', (c) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>aaa</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src=${import.meta.env.PROD ? '/client.js' : '/app/client.tsx'}></script>
      </body>
    </html>`);
});

export default app;
