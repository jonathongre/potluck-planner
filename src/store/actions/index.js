import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';

//Register Action
export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

export const addUser = (user) => dispatch => {
  dispatch({ type: REGISTRATION_START });
  axios
  .post(`https://potluck-planner-v2.herokuapp.com/accounts/register`, {
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      password: user.password
    })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      console.log(res.data)
      dispatch({ type: REGISTRATION_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTRATION_FAILURE, payload: err.response });
    });
}

//Login Action
export const LOGIN_START ="LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const findUser = (user) => dispatch => {
    dispatch({ type: LOGIN_START });
    axios
    .post(`https://potluck-planner-v2.herokuapp.com/accounts/login`, {
        username: user.username,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('token', res.data.token);
        console.log(res.data)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        return true;
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
}

//Get User Info/Events
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getAccount = (myAccount) => dispatch => {
    dispatch({ type: FETCH_START});
    axiosWithAuth()
    .get(`/accounts`, myAccount)
    .then(res => {
        console.log('fetched account', res.data.myAccount[0])
        dispatch({type:FETCH_SUCCESS, payload:res.data.myAccount[0]})
    })
    .catch(err => {
        dispatch({type: FETCH_FAILURE, payload: err.response})
    });
}

export const getEvents = (myEvents) => dispatch => {
    dispatch({ type: FETCH_START});
    axiosWithAuth()
    .get(`/accounts`, myEvents)
    .then(res => {
        console.log('fetched events', res.data.myEvents)
        dispatch({type:FETCH_SUCCESS, payload:res.data.myEvents})
    })
    .catch(err => {
        dispatch({type: FETCH_FAILURE, payload: err.response})
    });
}

export const getInvites = (myEvents) => dispatch => {
    dispatch({ type: FETCH_START});
    axiosWithAuth()
    .get(`/accounts`, myEvents)
    .then(res => {
        console.log('fetched potlucks', res.data.potlucks)
        dispatch({type:FETCH_SUCCESS, payload:res.data.potlocks})
    })
    .catch(err => {
        dispatch({type: FETCH_FAILURE, payload: err.response})
    });
}

//Get All Users/Friends
export const getUsers = (friends) => dispatch => {
    dispatch({ type: FETCH_START});
    axiosWithAuth()
    .get(`/accounts/users`, friends)
    .then(res => {
        console.log('fetched items', res)
        dispatch({type:FETCH_SUCCESS, payload:res.data})
    })
    .catch(err => {
        dispatch({type: FETCH_FAILURE, payload: err.response})
    });
}
