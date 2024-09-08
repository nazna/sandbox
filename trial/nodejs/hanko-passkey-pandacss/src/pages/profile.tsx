import { Hanko, register } from '@teamhanko/hanko-elements';
import { useEffect, useMemo } from 'react';
import { useLocation } from 'wouter';
import { css } from '../../styled-system/css';
import { center, container } from '../../styled-system/patterns';
import { Nav } from '../components/nav';

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

export const Profile = () => {
  const hanko = useMemo(() => new Hanko(hankoApi), []);
  const [_location, setLocation] = useLocation();

  const handleClick = () => {
    hanko.user.logout().catch((err) => console.error(err));
  };

  useEffect(() => {
    register(hankoApi).catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!hanko.session.isValid) {
      setLocation('/', { replace: true });
    }
  }, [hanko, setLocation]);

  useEffect(() => {
    hanko.onUserLoggedOut(() => setLocation('/', { replace: true }));
  }, [hanko, setLocation]);

  return (
    <div className={container()}>
      <header className={center({ m: '16' })}>
        <Nav />
      </header>
      <main className={center({ flexDirection: 'column' })}>
        <hanko-profile />
        <button
          type="button"
          onClick={handleClick}
          className={css({
            width: 'full',
            bg: '#506cf0',
            color: 'white',
            p: '24 16',
            maxW: '350px',
            height: '42px',
            rounded: '8px',
            cursor: 'pointer',
          })}
        >
          Logout
        </button>
      </main>
    </div>
  );
};
