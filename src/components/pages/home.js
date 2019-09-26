import React, { useState, useEffect } from 'react';
import  axiosWithAuth  from "../../utils/axiosWithAuth";
import EventCard from '../eventCard';
import InviteCard from '../inviteCard';
import FriendCard from '../friendsCard';

const Home = () => {

    const [account , setAccount] = useState([]);
    const [events, setEvents] = useState([]);
    const [invites, setInvites] = useState([]);
    const [friends, setFriends] = useState([]);
    useEffect(() => getAccount(), []);
    useEffect(() => getEvents(), []);
    useEffect(() => getInvites(), []);
    useEffect(() => getFriends(), []);
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
    function getFriends() {
      axiosWithAuth()
        .get(`https://potluck-planner-v2.herokuapp.com/accounts/users`)
        .then(res => {
            setFriends(res.data);
        })
        .catch(err => console.log(err.response));
  }

    const [myEvents, setMyEvents] = useState(false);
    const [myInvites, setMyInvites] = useState(false);
    const [myFriends, setMyFriends] = useState(false);
    const togglemyEvents = () => {
       setMyEvents(!myEvents)
    }
    const togglemyInvites = () => {
      setMyInvites(!myInvites)
    }
    const togglemyFriends = () => {
      setMyFriends(!myFriends)
    }

  console.log(friends)
  return (
    <div className='homePage'>
      <div className='home-top'>
        <img className='logo' src={process.env.PUBLIC_URL + "/pot1_200x200.png"} alt='' />
        <h1>Hello {account.firstname}!</h1>
      </div>
      <h2 className='nav-button' onClick={togglemyFriends} >My Friends</h2>
      {myFriends ?  <div className='event-container'>
        {friends.map(data => <FriendCard key={data.id} data={data}/>)}
      </div> : null}
      <h2 className='nav-button' >Create a PotLuck</h2>
      <h2 className='nav-button' onClick={togglemyEvents} >My Potlucks</h2>
      {myEvents ?  <div className='event-container'>
        {events.map(data => <EventCard key={data.id} data={data}/>)}
      </div> : null} 
        <h2 className='nav-button' onClick={togglemyInvites}>My Invitations</h2>
        {myInvites ?  <div className='event-container'>
        {invites.map(data => <InviteCard key={data.id} data={data}/>)}
      </div> : null} 
    </div>   
  );
};

export default Home;

            