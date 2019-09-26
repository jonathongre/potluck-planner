import React, { useState, useEffect } from 'react';
import  axiosWithAuth  from "../../utils/axiosWithAuth";
import EventCard from '../eventCard';
import InviteCard from '../inviteCard';

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

    const [view1, setView1] = useState(false);
    const [view2, setView2] = useState(false);
    const toggleView1 = () => {
        setView1(!view1)
    }
    const toggleView2 = () => {
      setView2(!view2)
  }

  console.log(invites)
  return (
    <div className='homePage'>
      <div className='home-top'>
        <img className='logo' src={process.env.PUBLIC_URL + "/pot1_200x200.png"} alt='' />
        <h1>Hello {account.firstname}!</h1>
      </div>
      <h2 onClick={toggleView1}>My Potlucks</h2>
      {view1 ?  <div className='event-container'>
        {events.map(data => <EventCard key={data.id} data={data}/>)}
      </div> : null} 
        <h2>My Invitations</h2>
        {view2 ?  <div className='event-container'>
        {invites.map(data => <InviteCard key={data.id} data={data}/>)}
      </div> : null} 
    </div>   
  );
};

export default Home;

            