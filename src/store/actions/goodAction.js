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
});

export const deleteGood = (id) => ({
    type: types.DELETE_GOOD,
    id
});

export const deleteGoodSuccess = () => ({
    type: types.DELETE_GOOD_SUCCESS,
});

export const deleteGoodFaiure = () => ({
    type: types.DELETE_GOOD_FAIURE,
});

export const updateGood = (good) => ({
    type: types.UPDATE_GOOD,
    good
});