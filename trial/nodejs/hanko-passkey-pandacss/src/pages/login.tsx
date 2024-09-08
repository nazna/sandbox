import { Hanko, register } from '@teamhanko/hanko-elements';
import { useEffect, useMemo } from 'react';
import { useLocation } from 'wouter';
import { center, container } from '../../styled-system/patterns';
import { Nav } from '../components/nav';

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

export const Login = () => {
  const hanko = useMemo(() => new Hanko(hankoApi), []);
  const [_location, setLocation] = useLocation();

  useEffect(() => {
    register(hankoApi).catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    hanko.onSessionCreated(() => {
      setLocation('/profile');
    });
  }, [hanko, setLocation]);

  return (
    <div className={container()}>
      <header className={center({ m: '16' })}>
        <Nav />
      </header>
      <main className={center()}>
        <hanko-auth />
      </main>
    </div>
  );
};
