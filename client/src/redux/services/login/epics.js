import 'rxjs';

import { initFail, initSuccess, loginFail, loginSuccess } from './actions';

import FetchClient from '../../../utils/fetch-client';
import { types } from './actions';

const service = new FetchClient('/api/login');

export const initEpic = (action$) => action$
  .ofType(types.INIT)
  .mergeMap(action => service
    .read()
    .then(initSuccess)
    .catch(initFail));

export const loginEpic = (action$) => action$
  .ofType(types.LOGIN)
  .mergeMap(action => service
    .create(action.payload)
    .then(loginSuccess)
    .catch(loginFail));

export default [
  initEpic,
  loginEpic
]