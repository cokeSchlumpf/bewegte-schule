import app from './app/reducers';
import combineReducers from 'redux-immutable-combine-reducers';
import dashbaord from './dashboard/reducers';
import { fromJS } from 'immutable';
import login from './login/reducers';
import register from './register/reducers';
import { routerReducer as router } from 'react-router-redux';
import services from './services/reducers';

export default combineReducers(fromJS({
  app,
  dashbaord,
  login,
  register,
  router,
  services
}));