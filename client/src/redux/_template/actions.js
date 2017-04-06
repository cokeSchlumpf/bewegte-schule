import constantsFromArray from '../../utils/constants-from-array';

export const types = constantsFromArray([
  'FOO'
], 'BAR_');

export const foo = (payload) => (
  { type: types.SUBMIT, payload }
);

export default {
  foo
}