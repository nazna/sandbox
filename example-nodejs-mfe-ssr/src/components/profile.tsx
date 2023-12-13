export const Profile = () => {
  return (
    <section>
      <template shadowroot="closed">
        <link type="text/css" rel="stylesheet" href="/profile.css" />
        <div class="container">
          <div class="avatar">
            <img src="/avatar.svg" alt="Avatar" />
          </div>
          <span class="username">nazna</span>
        </div>
      </template>
    </section>
  );
};
