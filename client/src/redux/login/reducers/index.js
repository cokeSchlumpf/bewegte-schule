import { keepState, mergePayloadIn } from '../../../utils/redux-state-func'

import { fromJS } from 'immutable';
import serviceTypes from '../../services/types';
import types from '../actions/types';

export const initialState = fromJS({
  errors: {
    code: undefined,
    login: undefined
  },
  value: {
    code: '',
    password: '',
    pseudonym: ''
  }
});

const createpseudonymClick = keepState;

const loginClick = keepState;

const valueChange = mergePayloadIn('value');

const pseudonymsCreateFail = (state, payload) => {
  let message;

  if (payload.messageKey === 1) {
    message = 'Der angegebene Code ist leider falsch.';
  } else {
    message = 'Leider ist ein Fehler aufgetreten, bitte versuche es noch einmal.';
  }

  return mergePayloadIn('errors')(state, {
    code: message
  });
}

const pseudonymsCreateSuccess = () => initialState;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATEPSEUDONYM_CLICK:
      return createpseudonymClick(state, action.payload);

    case types.LOGIN_CLICK:
      return loginClick(state, action.payload);

    case types.VALUE_CHANGE:
      return valueChange(state, action.payload);

    case serviceTypes.pseudonyms.CREATE_FAIL:
      return pseudonymsCreateFail(state, action.payload);

    case serviceTypes.pseudonyms.CREATE_SUCCESS:
      return pseudonymsCreateSuccess(state, action.payload);

    default:
      return state;
  }
};
