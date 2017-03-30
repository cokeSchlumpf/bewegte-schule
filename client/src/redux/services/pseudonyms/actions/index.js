import types from './types';

export const create = (payload) => (
  { type: types.CREATE, payload }
);

export const createFail = (payload) => (
  { type: types.CREATE_FAIL, payload }
);

export const createSuccess = (payload) => (
  { type: types.CREATE_SUCCESS, payload }
);

export const update = (payload) => (
  { type: types.UPDATE, payload }
);

export const updateFail = (error) => (
  { type: types.UPDATE_FAIL, payload: { error } }
);

export const updateSuccess = (payload) => (
  { type: types.UPDATE_SUCCESS, payload }
);

export default {
  create,
  createFail,
  createSuccess,
  update,
  updateFail,
  updateSuccess
}