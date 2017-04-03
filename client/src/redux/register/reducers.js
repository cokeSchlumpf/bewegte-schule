import { keepState, mergePayload, mergePayloadIn } from '../../utils/redux-state-func';

import { fromJS } from 'immutable';
import serviceTypes from '../services/types';
import types from './types';

export const initialState = fromJS({
  error: undefined,
  code: undefined,
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

const pseudonymsUpdateFail = (state) => {
  return mergePayload(state, {
    error: 'Leider ist ein Fehler aufgetreten, bitte versuche es später noch einmal.'
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

    case serviceTypes.pseudonyms.UPDATE_FAIL:
      return pseudonymsUpdateFail(state, action.payload);

    case serviceTypes.pseudonyms.UPDATE_SUCCESS:
      return pseudonymsUpdateSuccess(state, action.payload);

    default:
      return state;
  }
};
