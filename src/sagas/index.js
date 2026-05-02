import * as entriesSaga from "./entriesSaga";

export function initSagas(sagasMiddleware) {
  Object.values(entriesSaga).forEach((saga) => sagasMiddleware.run(saga));
}
