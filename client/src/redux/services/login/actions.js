import constantsFromArray from '../../../utils/constants-from-array';

export const types = constantsFromArray([
  'LOGIN',
  'LOGIN_SUCCESS',
  'LOGIN_FAIL'
], 'SERVICES_LOGIN_');

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
  login,
  loginFail,
  loginSuccess
}