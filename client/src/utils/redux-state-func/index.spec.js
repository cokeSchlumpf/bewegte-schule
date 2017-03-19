import { keepState, mergePayload } from './index';

import { fromJS } from 'immutable';

describe('keepState', () => {
  it ('does nothing to the given state and ignores the payload', () => {
    const state = fromJS({
      foo: 'foo'
    });

    const payload = {
      bar: 'bar'
    };

    const result = keepState(state, payload);

    expect(result.toJS().bar).toBeUndefined();
    expect(result.toJS().foo).toEqual('foo');
  });
});

describe('mergePayload', () => {  
  it ('merges the given payload into the state', () => {
    const state = fromJS({
      foo: 'foo'
    });

    const payload = {
      bar: 'bar'
    };

    const result = mergePayload(state, payload);

    expect(result.toJS().bar).toEqual('bar');
    expect(result.toJS().foo).toEqual('foo');
  });
});