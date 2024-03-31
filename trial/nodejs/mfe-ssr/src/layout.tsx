import { jsxRenderer } from 'hono/jsx-renderer';

type RendererComponent = Parameters<typeof jsxRenderer>[0];

export const Layout: RendererComponent = (props) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
        <link type="text/css" rel="stylesheet" href="/top.css" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>example-nodejs-mfe-ssr</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
};
