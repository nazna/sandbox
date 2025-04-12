import { Hono } from 'hono';
import { jsxRenderer } from 'hono/jsx-renderer';
import { secureHeaders } from 'hono/secure-headers';
import { Layout } from './layout.tsx';
import { PostsModule } from './modules/posts-module.tsx';
import { Top } from './pages/top.tsx';
import { serialize } from './utils.ts';

const app = new Hono();

app.use('*', secureHeaders());
app.get('*', jsxRenderer(Layout, { docType: true, stream: true }));

app.get('/', (c) => c.render(<Top />));

app.get('/posts', async (c) => {
  const data = await PostsModule();
  return c.json(serialize(data));
});

export default app;
