import React, { Component } from 'react';
import { getAccount } from '../../store/actions';
import { connect } from 'react-redux';

class Home extends Component {
  

  componentDidMount() {
    this.props.getAccount()
  }

  render() {
    
    console.log(this.props)
    return (
      <div className='homePage'>

        <div className='home-top'>
          <img className='logo' src={process.env.PUBLIC_URL + "/pot1_200x200.png"} alt='logo' />
          <h1>Hello {this.props.data.firstname}!</h1>
        </div>
        
      </div>   
    );
  };
};

const mapStateToProps = state => ({
    data: state.eventReducer.data,
    fetching: state.eventReducer.fetching,
    error: state.eventReducer.error
})

export default connect(mapStateToProps, { getAccount }) (Home);

            