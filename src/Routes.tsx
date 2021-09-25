import { Switch, Route } from 'react-router-dom';
import { Home, NewRoom, Room } from './pages';

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/rooms/new" component={NewRoom} />
      <Route path="/rooms/:id" component={Room} />
    </Switch>
  );
}
