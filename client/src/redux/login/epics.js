import 'rxjs';

import services, { types as serviceTypes } from '../services/actions';

import _ from 'lodash';
import { push } from 'react-router-redux'
import { types } from './actions';

export const createpseudonymClickEpic = (action$, store) => action$
  .ofType(types.CREATEPSEUDONYM_CLICK)
  .map(action => services.pseudonyms.create({ code: _.get(store.getState().toJS(), 'login.value.code') }));

export const loginClickEpic = (action$, store) => action$
  .ofType(types.LOGIN_CLICK)
  .map(action => services.login.login(store.getState().toJS().login.value))

export const servicesLoginLoginSuccessEpic = (action$, store) => action$
  .ofType(serviceTypes.login.LOGIN_SUCCESS)
  .map(action => push('/'));

export const servicesPseudonymsCreateSuccessEpic = (action$, store) => action$
  .ofType(serviceTypes.pseudonyms.CREATE_SUCCESS)
  .map(action => push('register'));

export default [
  createpseudonymClickEpic,
  loginClickEpic,
  servicesLoginLoginSuccessEpic,
  servicesPseudonymsCreateSuccessEpic
];
