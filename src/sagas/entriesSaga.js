import { call, put, take } from "redux-saga/effects";
import axios from "axios";
import types from "../actions/entries.actions";

export function* getInitialEntriesSaga() {
  yield take(types.GET_INITIAL_ENTRIES);
  const result = yield call(axios, "http://localhost:3001/entries");
  yield put({ type: types.FILL_INITIAL_ENTRIES, payload: result.data });
}
