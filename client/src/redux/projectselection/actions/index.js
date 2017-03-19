import types from './types';

export const changeRepositorytype = (repositorytype) => (
  { type: types.CHANGE_REPOSITORYTYPE, payload: { repositorytype } }
);

export const changeValue = (value) => (
  { type: types.CHANGE_VALUE, payload: { value } }
);

export const clickLoad = () => (
  { type: types.CLICK_LOAD, payload: { } }
);

export default {
  changeRepositorytype,
  changeValue,
  clickLoad
}