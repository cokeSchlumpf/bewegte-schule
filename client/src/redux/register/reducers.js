import { keepState, mergePayload, mergePayloadIn } from '../../utils/redux-state-func';

import { fromJS } from 'immutable';
import serviceTypes from '../services/types';
import types from './types';

export const initialState = fromJS({
  error: undefined,
  code: undefined,
  isLoading: false,
  pseudonym: '',
  value: {
    password: '',
    passwordRepeat: ''
  }
});

const submit = keepState;

const submitFail = keepState;

const submitSuccess = keepState;

const valueChange = mergePayloadIn('value')

const pseudonymsCreateSuccess = mergePayload;

const pseudonymsUpdate = (state) => {
  return state.merge({ isLoading: true });
}

const pseudonymsUpdateFail = (state, payload) => {
  let message = 'Leider ist ein Fehler aufgetreten, bitte versuche es später noch einmal.';

  if (payload.error.messageKey === 2) {
    message = 'Das Pseudonym ist dem Server nicht bekannt. Eventuell ist seit dem Anlegen zu viel Zeit verstrichen. Bitte registriere dich noch einmal.';
  }

  return mergePayload(state, {
    error: message,
    isLoading: false
  });
}

const pseudonymsUpdateSuccess = () => initialState;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT:
      return submit(state, action.payload);

    case types.SUBMIT_FAIL:
      return submitFail(state, action.payload);

    case types.SUBMIT_SUCCESS:
      return submitSuccess(state, action.payload);

    case types.VALUE_CHANGE:
      return valueChange(state, action.payload);

    case serviceTypes.pseudonyms.CREATE_SUCCESS:
      return pseudonymsCreateSuccess(state, action.payload);

    case serviceTypes.pseudonyms.UPDATE:
      return pseudonymsUpdate(state, action.payload);

    case serviceTypes.pseudonyms.UPDATE_FAIL:
      return pseudonymsUpdateFail(state, action.payload);

    case serviceTypes.pseudonyms.UPDATE_SUCCESS:
      return pseudonymsUpdateSuccess(state, action.payload);

    default:
      return state;
  }
};
