import { combineReducers } from 'redux';
import { loginReducer } from '../reducers/loginReducer';
import { eventReducer } from '../reducers/eventReducer';

export default combineReducers({
    loginReducer, eventReducer
})