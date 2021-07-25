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