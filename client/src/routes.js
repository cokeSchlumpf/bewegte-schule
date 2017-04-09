import {
  Route,
  Switch,
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import NotFound from './components/NotFound';
import React from 'react';
import Register from './components/Register';
import { ConnectedRouter as Router } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();

const Routes = (props) => (
  <Router history={ history } {...props}>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
