import * as types from '../actions/types/goodTypes';

const initialState = {
    data: [],
    errMsg: ''
}

export function goodsRedcuer(state = initialState, action = {}) {
    switch (action.type) {
        case types.GET_ALL_GOODS:
            return {
                ...state,
            };
        case types.GET_ALL_GOODS_SUCCESS:
            return {
                ...state,
                data: action.goods,
                errMsg: '',
            };
        case types.GET_ALL_GOODS_FAIREU:
            return {
                ...state,
                data: [],
                errMsg: action.errMsg,
            };
        case types.ADD_GOOD:
            return {
                ...state,
            };
        case types.ADD_GOOD_SUCCESS:
            return {
                ...state,
                data: action.goods,
                errMsg: '',
            };
        case types.ADD_GOOD_FAIURE:
            return {
                ...state,
                data: [],
                errMsg: action.errMsg,
            };
        case types.DELETE_GOOD:
            return {
                ...state,
            };
        default: 
            return {
                ...state
            };
    }
}