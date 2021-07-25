import { call, put, takeEvery } from "redux-saga/effects";

import * as types from '../actions/types/goodTypes'
import * as goodsApi from '../services/goodApi';
import * as actions from '../actions/goodAction';

export default function* callGoodsApo() {
    yield takeEvery(types.GET_ALL_GOODS, callGetAllGoods);
}

function* callGetAllGoods(action) {
    const res = yield call(goodsApi.getAllGoods);

    if (res.status === 200 && res.data.status === 200) {
        yield put(actions.getAllGoodsSuccess(res.data.data));
    } else {
        yield put(actions.getAllGoodsFaiure(res.error || res.data.error));
    }
}