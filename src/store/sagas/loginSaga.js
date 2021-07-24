import { call, put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";

import * as types from "../actions/types/loginTypes";
import * as loginApi from "../services/loginApi";
import * as actions from "../actions/loginAction";

export default function* callLoginApi() {
  yield takeEvery(types.LOGIN, callLogin);
}

function* callLogin(action) {
  const res = yield call(loginApi.login, action.user);

  if (res.status === 200 && res.data.status === 200) {
    const { username } = action.user;
    yield put(actions.loginSuccess({ username }));
    yield put(push('/home'));
  } else {
    yield put(actions.loginFaiure(res.error || res.data.error));
  }
}
