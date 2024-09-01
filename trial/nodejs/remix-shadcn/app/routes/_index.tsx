import type { MetaFunction } from '@remix-run/node';
import { Card, CardHeader } from '../components/ui/card';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div className="max-w-lg mx-auto py-10">
      <Card>
        <CardHeader>Hello~</CardHeader>
      </Card>
    </div>
  );
}
