import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUserProfile} from './../../redux/reducer'
import logo from './../../Images/logo.png'
class Auth extends Component {
   constructor() {
      super();
      
      this.state = {
         username: '',
         password: ''
      }
   };
   
   async register() {
      const { username, password } = this.state;
      const response = await axios.post('/auth/register', { username: username, password: password })
      console.log(response.data[0])
      this.props.getUserProfile(response.data[0])
      
      this.props.history.push('/dashboard')
   };

   async login() {
      const { username, password } = this.state;
      const response = await axios.post('/auth/login', { username: username, password: password})
      console.log(response.data[0])
      this.props.getUserProfile(response.data[0])

      this.props.history.push('/dashboard') //routing to dashboard once logged in
   }

   render() {
      return (
         <div className='Auth'>
            <div className='auth_container'>
              <img className='login-logo' alt='' src={logo}/>
              <h1 className='auth_title'>Helo</h1>
            <div className='auth_input_box'>
              <p>Username</p>
              <input type='password'></input>
            </div>
            <div className="auth_input_box">
              <p>Password</p>
              <input type='password'></input>
            </div>
            <div className="auth_button_container">
              <button className='dark_button'>Login</button>
              <button className='dark_button'>Register</button>

            </div>
            
 

            </div>
         </div>
      );
   }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect( null, {getUserProfile} )(Auth);

