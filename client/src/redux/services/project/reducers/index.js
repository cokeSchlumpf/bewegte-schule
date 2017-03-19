import { keepState, mergePayload } from '../../../../utils/redux-state-func'

import { fromJS } from 'immutable';
import types from '../actions/types';

export const initialState = fromJS({
  result: undefined
 });

const read = keepState;

const readFail = keepState;

const readSuccess = mergePayload;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.READ:
      return read(state, action.payload);

    case types.READ_FAIL:
      return readFail(state, action.payload);

    case types.READ_SUCCESS:
      return readSuccess(state, action.payload);

    default:
      return state;
  }
};
