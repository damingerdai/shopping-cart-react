import axios from 'axios';

export const getAllGoods = () => {
    const url = `goods`;
    return axios.get(url);
};

export const addGoods = (good) => {
    if (good.total === null && good.total === undefined) {
        good.total = good.price & good.num;
    }
    const url = `goods`;
    return axios.put(url, good);
};