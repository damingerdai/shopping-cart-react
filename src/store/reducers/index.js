import { combineReducers } from 'redux';

import { loginReducer as login } from './loginReducer';

const createRootReducer = () => combineReducers({
    login
})

export default createRootReducer;