import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import App from './components/App';
import HelloWorld from './components/HelloWorld';
import Login from './components/Login';
import NotFound from './components/NotFound';
import React from 'react';

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Switch>
        <Route exact path='/' component={HelloWorld} />
        <Route exact path='/login' component={Login} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
