export const makeDocument = (html: string, css: string[], js: string[]) => {
  return `
    <!DOCTYPE html>
    <html class="no-js" lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
        <title>lit-ssr</title>
        <style>${css.join('')}</style>
      </head>
      <body>
        ${html}
      </body>
      <script type="module">${js.join('')}</script>
    </html>
  `;
};
