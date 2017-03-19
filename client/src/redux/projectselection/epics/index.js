import 'rxjs';

import servicesActions from '../../services/actions';
import types from '../actions/types';

export const clickEpic = (action$, store) => action$
  .ofType(types.CLICK_LOAD)
  .mapTo(servicesActions.project.read(store.value));

export default [
  clickEpic
]