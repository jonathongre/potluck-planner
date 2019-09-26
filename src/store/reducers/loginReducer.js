import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} 
from "../actions";

const initialState = {
    isLoadingLOGIN: false,
    successLOGIN: false,
    username: '',
    password: ''
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {...state, isLoadingLOGIN: true, successLOGIN: false}
        case LOGIN_SUCCESS:
            return {...state, isLoadingLOGIN: false, successLOGIN: true, username: action.payload, password: action.payload}
        case LOGIN_FAILURE:
            return {...state, isloadingLOGIN: false, successLOGIN: false, username: "", password:""}
        default:
            return state
    }
}