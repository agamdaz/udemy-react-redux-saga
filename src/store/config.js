import { createStore, combineReducers } from "redux";

import entriesReducer from "../reducers/entries.reducers";

export default () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__?.(),
  );
};
