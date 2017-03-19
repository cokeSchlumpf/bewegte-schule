import { combineEpics } from 'redux-observable';
import helloworld from './helloworld/epics';

export default combineEpics(
  ...helloworld);