import { applyMiddleware, compose, createStore } from 'redux';

import { Iterable } from 'immutable';
import { createEpicMiddleware } from 'redux-observable';
import reduxLoggerFactory from 'redux-logger';
import rootEpic from './epics';
import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

const reduxLoggerMiddleware = reduxLoggerFactory({ 
  stateTransformer: (state) => {
    if (Iterable.isIterable(state)) {
      return state.toJS();
    };

    return true;
  },
  collapsed: true 
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware, reduxLoggerMiddleware)
  )
);

export default store;
