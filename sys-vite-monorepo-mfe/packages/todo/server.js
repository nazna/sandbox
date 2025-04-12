import { resolve } from 'node:path';
import closeWithGrace from 'close-with-grace';
import express from 'express';

const PORT = 8081;
const app = express();

app.use('/', express.static(resolve(import.meta.dirname, './dist')));

const server = app.listen(PORT, () => console.log(`[packages/todo] Server is running on http://localhost:${PORT}`));

closeWithGrace({ delay: 100 }, ({ signal }) => {
  server.close(() => console.log(`[packages/todo] Server is closed on ${signal}`));
  server.closeAllConnections();
});
