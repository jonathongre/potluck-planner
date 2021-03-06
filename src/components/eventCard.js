import React, { useState } from 'react';
import { connect } from "react-redux";
// import {NavLink} from 'react-router-dom';


const EventCard = (props) => {

    const [view, setView] = useState(false);

    const toggleView = () => {
        setView(!view)
    }

    return (
        <div className='item-card' onClick={toggleView}>
            
                <h2>{props.data.name}</h2>
                {view ? <div className='item-info' onClick={toggleView}>
                    <p>Location : {props.data.location}</p>
                    <p>Date : ${props.data.date}</p>
                    <p>Time : {props.data.time}</p>
                
            <div className='btnctnr'>
                {/* <NavLink to={`/item/${props.stuff.id}`}><button>View</button></NavLink> */}
                {/* <NavLink style={{ textDecoration: 'none' }}> */}
                    <h4>Edit</h4>
                {/* </NavLink> */}
                <h4>Delete</h4>   
            </div>
            </div> : null}            
        </div>
        
    )
}


export default connect(null,{})(EventCard); 