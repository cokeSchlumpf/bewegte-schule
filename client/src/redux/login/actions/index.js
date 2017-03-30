import types from './types';

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
