import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import entriesReducer from "../reducers/entries.reducers";
import modalsReducer from "../reducers/modals.reducers";
import { initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export default () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__?.(),
    ),
  );
  initSagas(sagaMiddleware);
  return store;
};
