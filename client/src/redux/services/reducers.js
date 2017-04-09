import combineReducers from 'redux-immutable-combine-reducers';
import { fromJS } from 'immutable';
import login from './login/reducers';
import pseudonyms from './pseudonyms/reducers';

export default combineReducers(fromJS({
  login,
  pseudonyms
}));