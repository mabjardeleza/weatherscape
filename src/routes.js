import React from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import history from './history';
import Home from './containers/Home';

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={withRouter(Home)} />
    </Switch>
  </Router>
);
