import types from './types';

export const create = (payload) => (
  { type: types.CREATE, payload }
);

export const createFail = (error) => (
  { type: types.CREATE_FAIL, payload: { error } }
);

export const createSuccess = (result) => (
  { type: types.CREATE_SUCCESS, payload: { result } }
);

export default {
  create,
  createFail,
  createSuccess
}