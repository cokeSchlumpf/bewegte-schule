import _ from 'lodash';

export const keepState = (state, payload) => {
  return state;
}

export const mergePayload = (state, payload) => {
  return state.merge(payload);
}

export const mergePayloadIn = keyPath => (state, payload) => {
  let path;

  if (_.isString(keyPath)) {
    path = [ keyPath ];
  } else {
    path = keyPath;
  }

  return state.mergeIn(path, payload);
}