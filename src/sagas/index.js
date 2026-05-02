import * as testSaga from "./testSaga";

export function initSagas(sagasMiddleware) {
  Object.values(testSaga).forEach((saga) => sagasMiddleware.run(saga));
}
