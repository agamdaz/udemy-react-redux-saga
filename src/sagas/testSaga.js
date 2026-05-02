import { delay } from "redux-saga/effects";

export function* testSaga() {
  while (true) {
    console.log("This is a test saga");
    yield delay(1000);
  }
}

export function* count() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
