import { delay, put, take } from "redux-saga/effects";

function double(number) {
  return number * 2;
}

export function* testSaga() {
  while (true) {
    console.log("This is a test saga");
    const state = yield take("TEST_ACTION");
    const result = double(2);
    console.log("Result:", result);
    console.log("TEST_ACTION received", state);
  }
}

export function* dispatchTest() {
  while (true) {
    yield delay(1000);
    yield put({
      type: "TEST_ACTION",
      payload: "TEST_PAYLOAD",
    });
  }
}
