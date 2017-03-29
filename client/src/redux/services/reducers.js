import combineReducers from 'redux-immutable-combine-reducers';
import { fromJS } from 'immutable';
import pseudonyms from './pseudonyms/reducers';

export default combineReducers(fromJS({
  pseudonyms
}));