import constantsFromArray from '../../../utils/constants-from-array';

export const types = constantsFromArray([
  'INIT',
  'INIT_FAIL',
  'INIT_SUCCESS',

  'LOGIN',
  'LOGIN_FAIL',
  'LOGIN_SUCCESS'
], 'SERVICES_LOGIN_');

export const init = () => (
  { type: types.INIT, payload: {} }
);

export const initFail = (error) => (
  { type: types.INIT_FAIL, payload: { error } }
);

export const initSuccess = (payload) => (
  { type: types.INIT_SUCCESS, payload }
);

export const login = (payload) => (
  { type: types.LOGIN, payload }
);

export const loginFail = (error) => (
  { type: types.LOGIN_FAIL, payload: { error } }
);

export const loginSuccess = (payload) => (
  { type: types.LOGIN_SUCCESS, payload }
);

export default {
  init,
  initFail,
  initSuccess,
  login,
  loginFail,
  loginSuccess
}