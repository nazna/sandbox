import { hc } from 'hono/client';
import { use } from 'react';
import type { ApiType } from '../api';

const { say } = hc<ApiType>('/api');

export async function fetchMessage() {
  const res = await say.$get();
  return res.json();
}

type Props = {
  promise: ReturnType<typeof fetchMessage>;
};

export function Message(props: Props) {
  const { message } = use(props.promise);
  return <p>{message}</p>;
}
