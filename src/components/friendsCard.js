import React, { useState } from 'react';
import { connect } from "react-redux";

const FriendCard = (props) => {

    const [view, setView] = useState(false);

    const toggleView = () => {
        setView(!view)
    }

    return (
    <>
        <div className='item-card' onClick={toggleView}>
            
            <h2>{props.data.firstname} {props.data.lastname}</h2>


        {view ? <div className='item-info' onClick={toggleView} >
                    <p>User Name: {props.data.username}</p>
                {/* <div className='btnctnr'> */}
                    {/* <NavLink to={`/item/${props.stuff.id}`}><button>View</button></NavLink> */}
                    {/* <NavLink style={{ textDecoration: 'none' }}> */}
                        {/* <h4>RSVP</h4> */}
                    {/* </NavLink>   */}
                {/* </div>  */}
            </div> : null}          
        </div>
    </>  
    )
}


export default connect(null,{})(FriendCard); 