import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import App from './components/App';
import NotFound from './components/NotFound';
import React from 'react';

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
