import { call, put, takeEvery } from "redux-saga/effects";

import * as types from '../actions/types/goodTypes'
import * as goodsApi from '../services/goodApi';
import * as actions from '../actions/goodAction';

export default function* callGoodsApi() {
    yield takeEvery(types.GET_ALL_GOODS, callGetAllGoods);
    yield takeEvery(types.ADD_GOOD, callAddGood);
    yield takeEvery(types.DELETE_GOOD, callDeleteGood);
    yield takeEvery(types.UPDATE_GOOD, callUpdateGood);
}

function* callGetAllGoods(action) {
    const res = yield call(goodsApi.getAllGoods);

    if (res.status === 200 && res.data.status === 200) {
        yield put(actions.getAllGoodsSuccess(res.data.data));
    } else {
        yield put(actions.getAllGoodsFaiure(res.error || res.data.error));
    }
}

function* callAddGood(action) {
    const res = yield call(goodsApi.addGoods, action.good);

    if (res.status === 200 && res.data.status === 200) {
        yield put(actions.addGoodSuccess(res.data.data));
    } else {
        yield put(actions.addGoodFaiure(res.error || res.data.error));
    }
}

function* callUpdateGood(action) {
    console.log(action)
    const res = yield call(goodsApi.updateGoods, action.good);

    if (res.status === 200 && res.data.status === 200) {
        yield put(actions.getAllGoods());
    }
}

function* callDeleteGood(action) {
    const res = yield call(goodsApi.deleteGood, action.id);

    if (res.status === 200 && res.data.status === 200) {
        yield put(actions.getAllGoods());
    } else {
        yield put(actions.deleteGoodFaiure(res.error || res.data.error));
    }
}