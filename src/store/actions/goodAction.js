import * as types from './types/goodTypes';

export const getAllGoods = () => ({
    type: types.GET_ALL_GOODS
});

export const getAllGoodsSuccess = (goods) => ({
    type: types.GET_ALL_GOODS_SUCCESS,
    goods,
});

export const getAllGoodsFaiure = (error) => ({
    type: types.GET_ALL_GOODS_FAIREU,
    error
});

export const addGood = (good) => ({
    type: types.ADD_GOOD,
    good
});

export const addGoodSuccess = (goods) => ({
    type: types.ADD_GOOD_SUCCESS,
    goods
});

export const addGoodFaiure = (error) => ({
    type: types.ADD_GOOD_FAIURE,
    error
})