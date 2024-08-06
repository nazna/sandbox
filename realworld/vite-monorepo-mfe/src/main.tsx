import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import closeWithGrace from 'close-with-grace';
import express from 'express';
import { ah } from './utils.js';

const PORT = 8080;
const app = express();

const { createServer } = await import('vite');
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });

const templateHtml = await readFile(resolve(import.meta.dirname, '../index.html'), 'utf-8');
const publicFiles = await readdir(resolve(import.meta.dirname, '../public'));
const appCss = publicFiles
  .filter((filename) => filename.endsWith('.css'))
  .map((css) => `<link rel="stylesheet" href="/${css}">`)
  .join('');

app.use(vite.middlewares);

app.get(
  '/',
  ah(async (req, res) => {
    const url = req.originalUrl;
    const template = await vite.transformIndexHtml(url, templateHtml);
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const { appHtml } = await render(url);
    const html = template.replace('<!--app-css-->', appCss).replace('<!--app-html-->', appHtml);

    return res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  }),
);

const server = app.listen(PORT, () => console.log(`[packages/core] Server is running on http://localhost:${PORT}`));

closeWithGrace({ delay: 100 }, ({ signal }) => {
  server.close(() => console.log(`[packages/core] Server is closed on ${signal}`));
  server.closeAllConnections();
});
