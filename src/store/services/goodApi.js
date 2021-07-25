import axios from 'axios';

export const getAllGoods = () => {
    const url = `goods`;
    return axios.get(url);
};