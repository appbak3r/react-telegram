import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { environment } from '../config/environment';

import { rootSaga } from './sagas/rootSaga';
import { rootReducer } from './reducers/rootReducer';


const logger = createLogger({
  predicate: () => environment.isLoggerEnabled,
});

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger, sagaMiddleware));
  
  sagaMiddleware.run(rootSaga);
  
  return store;
};
