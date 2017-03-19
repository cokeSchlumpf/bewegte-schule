import combineReducers from 'redux-immutable-combine-reducers';
import { fromJS } from 'immutable';
import helloworld from './helloworld/reducers';

export default combineReducers(fromJS({
  helloworld,
}));