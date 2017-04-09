import constantsFromArray from '../../utils/constants-from-array';

export const types = constantsFromArray([
  'CREATEPSEUDONYM_CLICK',
  'LOGIN_CLICK',
  'REDIRECT_TO',
  'VALUE_CHANGE'
], 'LOGIN_');

export const createpseudonymClick = () => (
  { type: types.CREATEPSEUDONYM_CLICK, payload: { } }
);

export const loginClick = () => (
  { type: types.LOGIN_CLICK, payload: { } }
);

export const loginRedirectTo = (path) => (
  { type: types.REDIRECT_TO, payload: { path } }
);

export const valueChange = (payload) => (
  { type: types.VALUE_CHANGE, payload }
);

export default {
  createpseudonymClick,
  loginClick,
  loginRedirectTo,
  valueChange
};
