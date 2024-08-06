import { Suspense, lazy } from 'react';

type Props = {
  [name: string]: string;
};

export const App = (_props: Props) => {
  // @ts-expect-error
  const Header = lazy(() => import('../downloaded/header.js'));
  // @ts-expect-error
  const Todo = lazy(() => import('../downloaded/todo.js'));

  return (
    <div>
      <Suspense fallback="loading">
        <Header />
        <Todo />
      </Suspense>
      <p>Hello, this is core app.</p>
    </div>
  );
};
