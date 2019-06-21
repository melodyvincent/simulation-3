import React, { Component } from 'react'
import Nav from './../Nav/Nav'
import './Dashboard.css'

class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            searchInput: '',
            userposts: true
        }
    }


    render() {
        return (
            <div className='dash'>
            < Nav />
            <div className='dash-filter-box'>
               <div className='dash-search-box'>
                  <input className='dash-search-bar' onChange={(e) => this.setState({ searchInput: e.target.value })} type="text"/>
                  <button></button>
               </div>

               <div className='checkbox-container'>
                  <p> My posts </p>
                  <input type="checkbox"/>
               </div>
            </div>
            <div className='post-container'></div>
         </div>
      );
   }
}
export default Dashboard;
