import { fromJS } from 'immutable';
import types from '../actions/types';

export const initialState = fromJS({
  value: "",
  output: "Enter your name and press submit!"
});

const submit = state => {
  return state;
};

const submitFail = state => {
  return state;
}

const submitSuccess = (state, payload) => {
  return state.merge(payload);
}

const updateValue = (state, payload) => {
  return state.merge(payload);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT:
      return submit(state, action.payload);

    case types.SUBMIT_FAIL:
      return submitFail(state, action.payload);

    case types.SUBMIT_SUCCESS:
      return submitSuccess(state, action.payload);    
    
    case types.UPDATE_VALUE:
      return updateValue(state, action.payload);

    default:
      return state;
  }
};
