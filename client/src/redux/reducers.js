import combineReducers from 'redux-immutable-combine-reducers';
import { fromJS } from 'immutable';
import helloworld from './helloworld/reducers';
import projectselection from './projectselection/reducers';
import services from './services/reducers';

export default combineReducers(fromJS({
  helloworld,
  projectselection,
  services
}));