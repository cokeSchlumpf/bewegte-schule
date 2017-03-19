export const keepState = (state, payload) => {
  return state;
}

export const mergePayload = (state, payload) => {
  return state.merge(payload);
}