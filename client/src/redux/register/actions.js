import constantsFromArray from '../../utils/constants-from-array';

export const types = constantsFromArray([
  'SUBMIT',
  'SUBMIT_FAIL',
  'SUBMIT_SUCCESS',
  
  'VALUE_CHANGE'
], 'REGISTER_');

export const submit = () => (
  { type: types.SUBMIT, payload: {} }
);

export const submitFail = () => (
  { type: types.SUBMIT_FAIL, payload: {} }
);

export const submitSuccess = () => (
  { type: types.SUBMIT_SUCCESS, payload: {} }
);

export const valueChange = (payload) => (
  { type: types.VALUE_CHANGE, payload }
);

export default {
  submit,
  submitFail,
  submitSuccess,
  valueChange
}