import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { environment } from '../config/environment';
import { rootReducer } from './reducer';
import { rootSaga } from './saga';

const logger = createLogger({
  predicate: () => environment.isLoggerEnabled,
});

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(logger, sagaMiddleware)
  );
  
  sagaMiddleware.run(rootSaga);
  
  return store;
};
