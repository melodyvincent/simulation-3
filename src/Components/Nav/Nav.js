import React from "react";
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

function Nav(props) {
  return(

    <div className='App'>
      <div className='Nav'>
        <div className='nav_profile_container'>
          <div className='nav_profile_pic'>
            <p></p> 
          </div>

        <div className='nav_links'>
          <a ref="#dashboard">
          </a>

        </div>


        </div>

      </div>

    </div>
  )
}
function mapStateToProps(reduxState) {
  const {username, profile_pic} = reduxState;
  return {username, profile_pic}

}

export default connect (mapStateToProps) (Nav);
