import types from './types';

export const foo = (payload) => (
  { type: types.SUBMIT, payload }
);

export default {
  foo
}