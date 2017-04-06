import 'rxjs';

import { createFail, createSuccess, updateFail, updateSuccess } from '../actions';

import FetchClient from '../../../../utils/fetch-client';
import { types } from './actions';

const service = new FetchClient('/api/pseudonyms');

export const createEpic = (action$) => action$
  .ofType(types.CREATE)
  .mergeMap(action => service
    .create(action.payload)
    .then(createSuccess)
    .catch(createFail));

export const updateEpic = (action$) => action$
  .ofType(types.UPDATE)
  .mergeMap(action => service
    .update(action.payload)
    .then(updateSuccess)
    .catch(updateFail));

export default [
  createEpic,
  updateEpic
]