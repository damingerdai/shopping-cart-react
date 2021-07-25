import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { goodsRedcuer as good } from './goodsReducer';
import { loginReducer as login } from './loginReducer';

const createRootReducer = (history) => 
    combineReducers({
        router: connectRouter(history),
        good,
        login
    });

export default createRootReducer;