import { css } from '../../styled-system/css';
import { center, container } from '../../styled-system/patterns';
import { Nav } from '../components/nav';

export const NotFound = () => {
  return (
    <div className={container()}>
      <header className={center({ m: '16' })}>
        <Nav />
      </header>
      <main className={center({ pos: 'relative' })}>
        <img src="/cat.jpg" alt="cat" />
        <p className={css({ pos: 'absolute', top: '16', fontSize: '4xl', fontWeight: 'bold' })}>404 - Not Found</p>
      </main>
    </div>
  );
};
