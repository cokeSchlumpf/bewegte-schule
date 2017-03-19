import 'rxjs';

import actions from '../actions';
import types from '../actions/types';

export const readEpic = (action$) => action$
  .ofType(types.READ)
  .mapTo(actions.readSuccess({ foo: 'bar' }));

export default [
  readEpic
]