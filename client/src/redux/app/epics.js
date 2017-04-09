import services from '../services/actions';
import { types } from './actions';

export const initEpic = (action$) => action$
  .ofType(types.INIT)
  .mapTo(services.login.init());

export default [
  initEpic
];