import { combineEpics } from 'redux-observable';
import helloworld from './helloworld/epics';
import projectselection from './projectselection/epics';
import projecttree from './projecttree/epics';
import services from './services/epics';

export default combineEpics(
  ...helloworld,
  ...projectselection,
  ...projecttree,
  ...services);