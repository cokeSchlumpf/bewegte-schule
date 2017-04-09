import 'rxjs';

import { loginFail, loginSuccess } from './actions';

import FetchClient from '../../../utils/fetch-client';
import { types } from './actions';

const service = new FetchClient('/api/login');

export const loginEpic = (action$) => action$
  .ofType(types.LOGIN)
  .mergeMap(action => service
    .create(action.payload)
    .then(loginSuccess)
    .catch(loginFail));

export default [
  loginEpic
]