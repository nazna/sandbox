import { Hono } from 'hono';
import { jsxRenderer } from 'hono/jsx-renderer';
import favicon from './favicon.svg?raw';
import htmx from './htmx.min.js?raw';
import unocss from './uno.css?raw';

type AddReqesutBody = FormData & {
  body: string;
};

const staticRoute = new Hono();

staticRoute.get('/favicon', (c) => {
  c.header('Content-Type', 'image/svg+xml');
  return c.body(favicon);
});

staticRoute.get('/htmx', (c) => {
  c.header('Content-Type', 'text/javascript; charset=UTF-8');
  return c.body(htmx);
});

staticRoute.get('/styles', (c) => {
  c.header('Content-Type', 'text/css');
  return c.body(unocss);
});

const app = new Hono();
app.route('/', staticRoute);

app.use(
  '*',
  jsxRenderer(
    ({ children }) => {
      return (
        <html lang="ja">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>aaa</title>
            <link rel="icon" type="image/svg+xml" href="/favicon" />
            <link rel="stylesheet" href="/styles" />
          </head>
          <body class="dark:bg-black:10">
            {children}
            <script src="/htmx" />
          </body>
        </html>
      );
    },
    { docType: true, stream: true },
  ),
);

app.get('/', (c) => {
  return c.render(
    <div class="grid place-content-center mt-20">
      <form hx-post="/add" hx-target="#items" hx-swap="afterbegin transition:true">
        <input
          type="text"
          name="body"
          class="px-4 py-2 border border-light focus:outline-none rounded-lg rounded-r-none"
          placeholder="What's up?"
        />
        <button type="submit" class="px-4 py-2 border border-light focus:outline-none rounded-lg rounded-l-none">
          Add
        </button>
      </form>
      <hr class="w-full h-2 border-none" />
      <ul id="items" class="list-none m-0 p-0">
        <li>Hello</li>
      </ul>
    </div>,
  );
});

app.post('/add', async (c) => {
  const fd = (await c.req.formData()) as AddReqesutBody;
  const body = fd.get('body');

  if (!body) {
    c.status(400);
    return c.html(<span>400: Bad Request</span>);
  }

  return c.html(<li>{body}</li>);
});

export default app;
