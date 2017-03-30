import 'rxjs';

import { LOCATION_CHANGE, push } from 'react-router-redux';

import _ from 'lodash';
import services from '../services/actions';
import types from './types';

export const routerEpic = (action$, store) => action$
  .ofType(LOCATION_CHANGE)
  .filter(action => _.startsWith(action.payload.pathname, '/register'))
  .filter(action => {
    const pseudonym = store.getState().toJS().register.pseudonym;
    return !(_.isString(pseudonym) && _.size(pseudonym) > 0);
  })
  .map(action => push('login'));

export const submitEpic = (action$, store) => action$
  .ofType(types.SUBMIT)
  .map(action => {
    const state = store.getState().toJS().register;

    return services.pseudonyms.update({
      pseudonym: state.pseudonym,
      password: state.value.password
    });
  });

export default [
  routerEpic,
  submitEpic
]