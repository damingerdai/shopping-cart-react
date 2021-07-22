import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginReducer as login } from './loginReducer';

const createRootReducer = (history) => 
    combineReducers({
        router: connectRouter(history),
        login
    });

export default createRootReducer;