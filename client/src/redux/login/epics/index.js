import 'rxjs';

import _ from 'lodash';
import { push } from 'react-router-redux'
import serviceTypes from '../../services/types';
import servicesActions from '../../services/actions';
import types from '../actions/types';

export const createpseudonymClickEpic = (action$, store) => action$
  .ofType(types.CREATEPSEUDONYM_CLICK)
  .mapTo(servicesActions.pseudonyms.create({ code: _.get(store.getState().toJS(), 'login.code') }));

export const servicesPseudonymsCreateSuccessEpic = (action$, store) => action$
  .ofType(serviceTypes.pseudonyms.CREATE_SUCCESS)
  .map(action => push('register'));

export default [
  createpseudonymClickEpic,
  servicesPseudonymsCreateSuccessEpic
];
