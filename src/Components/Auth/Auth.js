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
      this.login = this.login.bind(this);
      this.register = this.register.bind(this);
   };
   handleChange(prop, val) {
      if (val.lenght < 12) {
         this.setState({
            [prop]: val
         })
      }
   }

   login() {
      axios.post('api/v1/auth/login', this.state)
         .then(res => {
            this.props.updateUser(res.data);
            this.props.history.push('/dashboard')
         })
   }

   register(){
      axios.post('/api/v/auth/register', this.state)
         .then(res => {
            this.props.updateUser(res.data);
            this.props.history.push('/dashboard')
         })
   }
   
   render() {
      return (
         <div className='Auth'>
            <div className='auth_container'>
              <img className='login-logo' alt='' src={logo}/>
              <h1 className='auth_title'>Helo</h1>
            <div className='auth_input_box'>
              <p>Username: </p>
              <input value={this.state.username} onChange={(e => this.handleChange('username', e.target.value))}></input>
            </div>
            <div className="auth_input_box">
              <p>Password: </p>
              <input value={this.state.password} onChange={(e => this.handleChange('password', e.target.value))}></input>
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

