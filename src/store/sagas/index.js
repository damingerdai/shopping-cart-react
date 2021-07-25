import { all, fork } from "redux-saga/effects";

import goodSaga from "./goodSaga";
import loginSaga from "./loginSaga";

export function* rootSaga() {
  yield all([
    fork(goodSaga),
    fork(loginSaga)
  ]);
}
