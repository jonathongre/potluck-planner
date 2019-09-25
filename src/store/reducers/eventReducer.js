import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
} 
from '../actions';

export const initialState = {
    data: [],
    error:'',
    fetchingData:false,   
}

export const eventReducer =(state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return{...state, fetching:true};
        case FETCH_SUCCESS:
            return{...state, data:action.payload, fetching:false};
        case FETCH_FAILURE:
            return{...state, error:action.payload, fetching:false};
        default:
            return state
    }
}