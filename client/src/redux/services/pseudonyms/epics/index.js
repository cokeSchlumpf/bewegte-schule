import 'rxjs';

import actions from '../actions';
import types from '../actions/types';

export const createEpic = (action$) => action$
  .ofType(types.CREATE)
  .mapTo(actions.createSuccess({ pseudonym: 'foolish_farmer' }));

export default [
  createEpic
]