import enhance from '@enhance/ssr';
import { ClickCounter } from './click-counter.js';
import { HelloWorld } from './hello-world.js';

const html = enhance({
  elements: {
    'hello-world': HelloWorld,
    'click-counter': ClickCounter,
  },
});

export const makeDocument = (content: string) => {
  return html`
    <!DOCTYPE html>
    <html class="no-js" lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
        <title>enhance-ssr</title>
      </head>
      <body>
        <hello-world name="nazna"></hello-world>
        ${content}
      </body>
    </html>
  `;
};
