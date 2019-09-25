import React from 'react';
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';


const Card = (props) => {


    console.log(props.data.id)
    return (
        <div className='item-card'>
            
                <h2>{props.data.name}</h2> 
                {/* <img src='https://via.placeholder.com/100'alt='placeholder'/> */}
                <p>Location : {props.data.location}</p>
                <p>Date : ${props.data.date}</p>
                <p>Time : {props.data.time}</p>
            
            <div className='btnctnr'>
                {/* <NavLink to={`/item/${props.stuff.id}`}><button>View</button></NavLink> */}
                <NavLink><button>Edit</button></NavLink>
                <button>Delete</button>   
            </div>           
        </div>
        
    )
}


export default connect(null,{})(Card); 