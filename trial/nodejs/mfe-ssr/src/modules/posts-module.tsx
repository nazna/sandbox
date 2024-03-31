interface PostData {
  id: number;
  userId: number;
  title: string;
}

const SayGoodbye = () => <p>Goodbye :P</p>;
const SayHello = (props: { name: string }) => <p>Hello, {props.name}</p>;
const ChildWorld = () => <p>Im child</p>;
const ParentWorld = () => (
  <div>
    <ChildWorld />
  </div>
);

export const PostsModule = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
  // const data = (await res.json()) as PostData[];

  return (
    <section>
      <template shadowroot="closed">
        <link type="text/css" rel="stylesheet" href="/profile.css" />
        <div class="container">
          <p>This is posts-module</p>
          <SayGoodbye />
          <SayHello name="alma" />
          <ParentWorld />
        </div>
      </template>
    </section>
  );
};
