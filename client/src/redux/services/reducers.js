import combineReducers from 'redux-immutable-combine-reducers';
import { fromJS } from 'immutable';
import project from './project/reducers';

export default combineReducers(fromJS({
  project
}));