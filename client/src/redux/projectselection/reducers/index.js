import { keepState, mergePayload } from '../../../utils/redux-state-func'

import { fromJS } from 'immutable';
import types from '../actions/types';

export const initialState = fromJS({
  value: undefined,
  valueBackup: {},
  repositorytype: 'github'
});

const changeRepositorytype = (state, payload) => {
  const stateJs = state.toJS();

  return state.mergeDeep(payload, {
    value: stateJs.valueBackup[payload.repositorytype],
    valueBackup: {
      [stateJs.repositorytype]: stateJs.value
    }
  });
}

const changeValue = mergePayload;

const clickLoad = keepState;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_REPOSITORYTYPE:
      return changeRepositorytype(state, action.payload);

    case types.CHANGE_VALUE:
      return changeValue(state, action.payload);

    case types.CLICK_LOAD:
      return clickLoad(state, action.payload);

    default:
      return state;
  }
};
