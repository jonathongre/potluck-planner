import React from 'react';
import { NavLink } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="landingPage">
            <img src={process.env.PUBLIC_URL + "/pot1_200x200.png"} alt='' className='logo'/>
            <h1>Planner</h1>
            <div className='buttonContainer'>
                <NavLink to='/register' style={{ textDecoration: 'none' }}><h2>Sign Up</h2></NavLink>
                <NavLink to='/login' style={{ textDecoration: 'none' }}><h2>Log In</h2></NavLink>
            </div>
        </div>
    )
}

export default Landing