import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../redux/reducer'
import logo from './../../Images/logo.png'
import './Auth.css'


class Auth extends Component {
   constructor() {
      super();
      
      this.state = {
         username: '',
         password: ''
      }
   };

   updateUsername(e) {
      this.setState({
         username: e
      })
   }
   
   updatePassword(e) {
      this.setState({
         password:e
      })
   }

   async register() {
      if(!this.state.username || !this.state.password) 
      return alert("Please enter a username and password.")
      let res = await axios.post(`/auth/register`, {
         username: this.state.username,
         password: this.state.password
      })

      if (res.data.message === 'loggedIn') {
         this.props.history.push('/dashboard')
      } else {
         alert(res.data.message)
      }
   };


   async login() {
      if(!this.state.username || !this.state.password) return alert("Please enter a username and password")
      let res = await axios.post(`/auth/register`, {
         username: this.state.username,
         password: this.state.password
      });
      if(res.data.message === 'loggedIn') {
         this.props.history.push('/dashboard')
         this.props.updateUser(res.data.user.id, res.data.user.username, 'image');
      } else {
         console.log(res.data.message)
      }
   }

   render() {
      return (
         <div className='Auth'>
         
           
            <div className='auth_container'>
              <img className='login-logo' alt='' src={logo}/>
              <h1 className='auth_title'>Helo</h1>
            <div className='auth_input_box'>
              <p>Username: </p>
              <input type='username'onChange={(e => this.updateUsername(e.target.value))}></input>
            </div>
            <div className="auth_input_box">
              <p>Password: </p>
              <input type='password' onChange={(e => this.updatePassword(e.target.value))}></input>
            </div>
               <div className="auth_button_container">
              <button className='dark_button' onClick={() =>this.login()}>Login</button>
              <button className='dark_button' onClick={() => this.register()}>Register</button>

               </div>

            </div>
         </div>
      );

   }
}

export default connect(null, {updateUser})(Auth);

