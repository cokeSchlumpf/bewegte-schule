import { keepState, mergePayloadIn } from '../../../utils/redux-state-func'

import { fromJS } from 'immutable';
import types from '../actions/types';

export const initialState = fromJS({
  value: {
    code: '',
    password: '',
    pseudonym: ''
  }
});

const createpseudonymClick = keepState;

const loginClick = keepState;

const valueChange = mergePayloadIn('value');

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATEPSEUDONYM_CLICK:
      return createpseudonymClick(state, action.payload);

    case types.LOGIN_CLICK:
      return loginClick(state, action.payload);

    case types.VALUE_CHANGE:
      return valueChange(state, action.payload);

    default:
      return state;
  }
};
