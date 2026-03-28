import { createStore, combineReducers } from "redux";

import entriesReducer from "../reducers/entries.reducers";

export default () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
    }),
  );
};
