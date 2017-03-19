import types from './types';

export const submit = () => (
  { type: types.SUBMIT, payload: { } }
);

export const submitFail = (error) => (
  { type: types.SUBMIT_FAIL, payload: { error } }
);

export const submitSuccess = (output) => (
  { type: types.SUBMIT_SUCCESS, payload: output }
);

export const updateValue = value => (
  { type: types.UPDATE_VALUE, payload: { value } }
);

export default {
  submit,
  submitFail,
  submitSuccess,
  updateValue
}