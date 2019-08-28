import Reducer1 from './reducers1';
import UserReducer from './user_reducer';
import AuthReducer  from './auth_reducer';
import { combineReducers } from 'redux';


const rootReducer =  combineReducers({
    reducer1: Reducer1,
    user_reducer: UserReducer,
    auth_reducer: AuthReducer
})

export default rootReducer;