import _ from 'lodash';
import login from './login/epics';
import pseudonyms from './pseudonyms/epics';

export default _.concat(
  login,
  pseudonyms);