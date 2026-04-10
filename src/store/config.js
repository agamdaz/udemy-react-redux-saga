import { createStore, combineReducers } from "redux";

import entriesReducer from "../reducers/entries.reducers";
import modalsReducer from "../reducers/modals.reducers";

export default () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__?.(),
  );
};
