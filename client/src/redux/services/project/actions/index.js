import types from './types';

export const read = (payload) => (
  { type: types.READ, payload }
);

export const readFail = (error) => (
  { type: types.READ_FAIL, payload: { error } }
);

export const readSuccess = (result) => (
  { type: types.READ_SUCCESS, payload: { result } }
);

export default {
  read,
  readFail,
  readSuccess
}