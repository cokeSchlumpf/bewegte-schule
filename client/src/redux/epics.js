import app from './app/epics';
import { combineEpics } from 'redux-observable';
import dashboard from './dashboard/epics';
import login from './login/epics';
import register from './register/epics';
import services from './services/epics';

export default combineEpics(
  ...app,
  ...dashboard,
  ...login,
  ...register,
  ...services);