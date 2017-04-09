import { fromJS } from 'immutable';
import { mergePayload } from '../../utils/redux-state-func'
import { types as serviceTypes } from '../services/actions';

export const initialState = fromJS({
  user: undefined
});

const loginInitSuccess = mergePayload;

const loginInitFail = (state) => state.merge({
  user: {}
});

const loginLoginFail = (state) => state.merge({
  user: {}
});

const loginLoginSuccess = mergePayload;

export default (state = initialState, action) => {
  switch (action.type) {
    case serviceTypes.login.INIT_SUCCESS:
      return loginInitSuccess(state, action.payload);

    case serviceTypes.login.INIT_FAIL:
      return loginInitFail(state, action.payload);

    case serviceTypes.login.LOGIN_FAIL:
      return loginLoginFail(state, action.payload);

    case serviceTypes.login.LOGIN_SUCCESS:
      return loginLoginSuccess(state, action.payload);

    default:
      return state;
  }
};
