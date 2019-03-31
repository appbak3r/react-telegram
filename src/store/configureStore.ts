import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { environment } from "../config/environment";
import { rootReducer } from "./reducer";
import { rootSaga } from "./saga";

const logger = createLogger({
  predicate: () => environment.isLoggerEnabled
});

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(logger, sagaMiddleware)
  );

  let sagaTask = sagaMiddleware.run(rootSaga);

  if ((module as any).hot) {
    (module as any).hot.accept("./reducer", () => {
      const nextRootReducer = require("./reducer");
      store.replaceReducer(nextRootReducer);
    });

    (module as any).hot.accept("./saga", () => {
      const nextRootSaga = require("./saga");

      sagaTask.cancel();

      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextRootSaga);
      });
    });
  }

  return store;
};
