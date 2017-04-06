import constantsFromArray from '../../../utils/constants-from-array';

export const types = constantsFromArray([
  'CREATEPSEUDONYM_CLICK',
  'LOGIN_CLICK',
  'VALUE_CHANGE'
], 'LOGIN_');

export const createpseudonymClick = () => (
  { type: types.CREATEPSEUDONYM_CLICK, payload: { } }
);

export const loginClick = () => (
  { type: types.LOGIN_CLICK, payload: { } }
);

export const valueChange = (payload) => (
  { type: types.VALUE_CHANGE, payload }
);

export default {
  createpseudonymClick,
  loginClick,
  valueChange
};
