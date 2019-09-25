import React, { useState } from 'react';
import { connect } from 'react-redux';
import { findUser } from '../../store/actions';


const Login = (props) => {

    const [ user, setUser ] = useState({
        username: '',
        password: ''
    })

    const changeHandler = event => {
        event.preventDefault();
        // console.log(event.target.value);
        setUser({ ...user, [event.target.name]: event.target.value });
      };

    const handleSubmit = event => {
        event.preventDefault();
        props.findUser(user)
        props.history.push('/home');
    }

    return (
        <div className='auth-page'>
            <div className='auth-top'>
            <img src={process.env.PUBLIC_URL + "/pot1_200x200.png"} alt='' className='logo'/>
            <h1>Login</h1>
            </div>
            <form className='auth-form'>
                <p className='auth-input'>
                    {/* <label>Username</label> */}
                    <input type='text' name='username' onChange={changeHandler} value={user.username} required placeholder='Username' /></p>
                <p className='auth-input'>
                    {/* <label>Password</label> */}
                    <input type='password' name='password' onChange={changeHandler} value={user.password} required placeholder='Password' /></p>
                <div className='buttonContainer'>   
                    <h2 onClick={handleSubmit} >Login</h2>
                </div> 
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    error: state.error,
    addUser: state.findUser,
    fetchingData: state.fetchingData
  });

  export default connect(  mapStateToProps, { findUser })(Login);