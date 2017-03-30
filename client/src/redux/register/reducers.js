import { keepState, mergePayload, mergePayloadIn } from '../../utils/redux-state-func';

import { fromJS } from 'immutable';
import serviceTypes from '../services/types';
import types from './types';

export const initialState = fromJS({
  value: {
    password: '',
    passwordRepeat: '' 
  },
  pseudonym: ''
});

const submit = keepState;

const submitFail = keepState;

const submitSuccess = keepState;

const valueChange = mergePayloadIn('value')

const pseudonymsCreateSuccess = mergePayload;

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

    default:
      return state;
  }
};
