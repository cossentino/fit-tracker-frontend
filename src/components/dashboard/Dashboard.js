import React, { Component } from 'react'
import { currentUser } from '../../library'
import { Redirect } from 'react-router-dom'



class Dashboard extends Component {

  render() {
    return(
    <div>
    { currentUser() ?  
      <div className="container" id="dashboard">
        <h3>My Dashboard</h3>
        <div className="progress">
            <div className="determinate" style={{width: '50%'}}></div>
        </div>
      </div>
      : <Redirect to="/login" />}
    </div>  
  )}
}



export default Dashboard