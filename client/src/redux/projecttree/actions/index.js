import types from './types';

export const changeValue = (value) => (
  { type: types.CHANGE_VALUE, payload: { value } }
);

export default {
  changeValue
}