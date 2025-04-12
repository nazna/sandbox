import { Route, Switch } from 'wouter';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { NotFound } from './pages/not-found';
import { Profile } from './pages/profile';

export const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  );
};
