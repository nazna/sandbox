import { html } from 'lit';
import './click-counter.js';
import './hello-world.js';

export const makeDocument = () => {
  return html`
    <!DOCTYPE html>
    <html class="no-js" lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
        <title>lit-ssr</title>
      </head>
      <body>
        <hello-world name="nazna"></hello-world>
        <click-counter></click-counter>
      </body>
      <script type="module" src="/client.js"></script>
    </html>
  `;
};
