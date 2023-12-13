import { Posts } from '../components/posts.tsx';
import { Profile } from '../components/profile.tsx';

export const Top = async () => {
  return (
    <>
      <h1 class="container"># example-nodejs-mfe-ssr</h1>
      <Profile />
      <Posts />
    </>
  );
};
