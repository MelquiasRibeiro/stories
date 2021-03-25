import React from 'react';
import { Switch } from 'react-router-dom';
import Main from '../pages/main';
import Login from '../pages/singIn';
import Register from '../pages/singUp';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/stories" component={Main} isPrivate />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
