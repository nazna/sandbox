import { Link } from 'wouter';
import { css } from '../../styled-system/css';
import { linkOverlay } from '../../styled-system/patterns';

export const Nav = () => {
  return (
    <nav>
      <ul className={css({ display: 'flex', gap: '16', '& a': { textDecorationLine: 'underline' } })}>
        <li className={css({ pos: 'relative' })}>
          <Link href="/" className={linkOverlay()}>
            Home
          </Link>
        </li>
        <li className={css({ pos: 'relative' })}>
          <Link href="/login" className={linkOverlay()}>
            Login
          </Link>
        </li>
        <li className={css({ pos: 'relative' })}>
          <Link href="/profile" className={linkOverlay()}>
            Profile
          </Link>
        </li>
        <li className={css({ pos: 'relative' })}>
          <Link href="/404" className={linkOverlay({ color: 'gray.300' })}>
            404
          </Link>
        </li>
      </ul>
    </nav>
  );
};
