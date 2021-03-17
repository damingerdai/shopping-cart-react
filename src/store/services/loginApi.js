import axios from 'axios';

export const login = (user) => {
    const url = `login`;
    return axios.post(url, user);
  };