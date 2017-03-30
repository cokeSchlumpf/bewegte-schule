import combineReducers from 'redux-immutable-combine-reducers';
import { fromJS } from 'immutable';
import login from './login/reducers';
import register from './register/reducers';
import { routerReducer as router } from 'react-router-redux';
import services from './services/reducers';

export default combineReducers(fromJS({
  login,
  register,
  router,
  services
}));