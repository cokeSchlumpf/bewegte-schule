import 'rxjs';

import services, { types as serviceTypes } from '../../services/actions';

import _ from 'lodash';
import { push } from 'react-router-redux'
import { types } from './actions';

export const createpseudonymClickEpic = (action$, store) => action$
  .ofType(types.CREATEPSEUDONYM_CLICK)
  .map(action => services.pseudonyms.create({ code: _.get(store.getState().toJS(), 'login.value.code') }));

export const servicesPseudonymsCreateSuccessEpic = (action$, store) => action$
  .ofType(serviceTypes.pseudonyms.CREATE_SUCCESS)
  .map(action => push('register'));

export default [
  createpseudonymClickEpic,
  servicesPseudonymsCreateSuccessEpic
];
