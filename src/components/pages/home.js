// import React, { Component } from 'react';
// import { getInfo } from '../../store/actions';
// import { connect } from 'react-redux';
// import {NavLink} from 'react-router-dom'; 
// import Card from '../card'


// class Home extends Component {
    
//     componentDidMount(){
//         this.props.getInfo();
//     }

    
//     render() {
//         console.log('HOME: ', this.props.data)
//         const myAccount = this.props.data.myAccount
//         console.log('?', myAccount)
//         return (
//             <div className='home-page'>
               
//             <h4></h4>
//             <div className='cards-container'>
//                 {this.props.data.myEvents.map(data =>
//                 <Card key={data.id} data={data}/>
//                 )}
//             </div>
//             </div>
//         )
//     }
// }


// const mapStateToProps = state =>   ({
//     data: state.eventReducer.data,
//     fetching: state.eventReducer.fetching,
//     error: state.eventReducer.error
//    })
// export default connect(mapStateToProps, { getInfo }) (Home)

import React, { useState, useEffect } from 'react';
import  axiosWithAuth  from "../../utils/axiosWithAuth";
import Card from '../card';

const Home = () => {


    const [account , setAccount] = useState([]);
    const [events, setEvents] = useState([]);
    const [invites, setInvites] = useState([]);
    useEffect(() => getAccount(), []);
    useEffect(() => getEvents(), []);
    useEffect(() => getInvites(), []);
    function getAccount() {
      axiosWithAuth()
        .get(`https://potluck-planner-v2.herokuapp.com/accounts`)
        .then(res => {
            setAccount(res.data.myAccount[0]);
        })
        .catch(err => console.log(err.response));
    }
    function getEvents() {
        axiosWithAuth()
          .get(`https://potluck-planner-v2.herokuapp.com/accounts`)
          .then(res => {
              setEvents(res.data.myEvents);
          })
          .catch(err => console.log(err.response));
    }
    function getInvites() {
        axiosWithAuth()
          .get(`https://potluck-planner-v2.herokuapp.com/accounts`)
          .then(res => {
              setInvites(res.data.potlucks);
          })
          .catch(err => console.log(err.response));
    }
    
    const calStyle = {
        border: 0,
        width: "600",
        height: "500", 
        frameborder: "0",
        scrolling: "no"
    }


    console.log('account', account, 'events', events, 'invites', invites )
  return (
    <div className='myJokesPage'>
      <h1>{account.firstname}'s Events</h1>
      <iframe src="https://calendar.google.com/calendar/b/3/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=cGxwbGFubmVyMjAxOUBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=NW5zNWw2a3NnNjYzbnVldXNpZDUwN3I0NWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%23B39DDB&amp;color=%230B8043" style={calStyle}/>
      <div className='cards-container'>
            {events.map(data => 
                <Card key={data.id} data={data}/>
                )}
            </div>
         </div>   
  );
};

export default Home;

            