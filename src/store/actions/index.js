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

export const getInfo = (myInfo) => dispatch => {
    dispatch({ type: FETCH_START});
    axiosWithAuth()
    .get(`/accounts`, myInfo)
    .then(res => {
        console.log('fetched items', res)
        dispatch({type:FETCH_SUCCESS, payload:res.data})
    })
    .catch(err => {
        dispatch({type: FETCH_FAILURE, payload: err.response})
    });
}