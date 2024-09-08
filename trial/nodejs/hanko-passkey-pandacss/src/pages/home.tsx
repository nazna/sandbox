import { center, container } from '../../styled-system/patterns';
import { Nav } from '../components/nav';

export const Home = () => {
  return (
    <div className={container()}>
      <header className={center({ m: '16' })}>
        <Nav />
      </header>
      <main className={center()}>
        <img src="/hero.jpg" alt="home" />
      </main>
    </div>
  );
};
