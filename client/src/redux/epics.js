import { combineEpics } from 'redux-observable';
import login from './login/epics';
import services from './services/epics';

export default combineEpics(
  ...login,
  ...services);