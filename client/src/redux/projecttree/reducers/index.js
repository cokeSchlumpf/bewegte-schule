import { keepState, mergePayload } from '../../../utils/redux-state-func'

import { fromJS } from 'immutable';
import sampledata from './sample.json';
import types from '../actions/types';

export const initialState = fromJS({
  value: sampledata
});

const changeValue = mergePayload;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_VALUE:
      return changeValue(state, action.payload);
    default:
      return state;
  }
};
