import { type InferResponseType, hc } from 'hono/client';
import { render, useEffect, useState } from 'hono/jsx/dom';
import type { ApiType } from './api';

const { hello } = hc<ApiType>('/api');

function Hello(props: { message: string }) {
  return <p>{props.message}</p>;
}

function App() {
  const [message, setMessage] = useState<InferResponseType<typeof hello.$get>>();

  useEffect(() => {
    hello
      .$get()
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div>
      <h3>This is client component.</h3>
      <Hello message={JSON.stringify(message)} />
    </div>
  );
}

render(<App />, document.getElementById('root') as HTMLElement);
