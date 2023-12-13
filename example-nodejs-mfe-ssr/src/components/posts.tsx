import { ErrorBoundary } from 'hono/jsx';
import { Suspense } from 'hono/jsx/streaming';

export const Posts = async () => {
  // const res = await fetch('http://localhost:8080/posts');
  // const data = await res.json();

  return (
    <ErrorBoundary fallback={<span>Error occured</span>}>
      <Suspense fallback={<span>Loading...</span>}>aaaaaa</Suspense>
    </ErrorBoundary>
  );
};
