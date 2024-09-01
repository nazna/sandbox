import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import stylesheet from './tailwind.css?url';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="stylesheet" href={stylesheet} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
