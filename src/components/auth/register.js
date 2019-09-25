import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../store/actions';


const Register = (props) => {

    const [ user, setUser ] = useState({
        firstname: '',
        lastname: '',
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
        props.addUser(user)
        props.history.push('/home');
    }

    return (
        <div className='auth-page'>
            <div className='auth-top'>
            <img src={process.env.PUBLIC_URL + "/pot1_200x200.png"} alt='' className='logo'/>
            <h1>Sign Up</h1>
            </div>
            <form className='auth-form'>
                <p className='auth-input'>
                    {/* <label>First Name</label> */}
                    <input type='text' name='firstname' onChange={changeHandler} value={user.firstname} placeholder='First Name' required /></p>
                <p className='auth-input'>
                    {/* <label>Last Name</label> */}
                    <input type='text' name='lastname' onChange={changeHandler} value={user.lastname} placeholder='Last Name' required /></p>
                <p className='auth-input'>
                    {/* <label>Username</label> */}
                    <input type='text' name='username' onChange={changeHandler} value={user.username} placeholder='Username' required /></p>
                <p className='auth-input'>
                    {/* <label>Password</label> */}
                    <input type='password' name='password' onChange={changeHandler} value={user.password} placeholder='Password' required /></p>
                <div className='buttonContainer'>
                    <h2 onClick={handleSubmit} >Register</h2>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    error: state.error,
    addUser: state.addUser,
    fetchingData: state.fetchingData
  });

  export default connect(  mapStateToProps, { addUser })(Register);