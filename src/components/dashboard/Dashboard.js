import React, { Component } from 'react'



class Dashboard extends Component {

  render() {
    return(
    <div className="container" id="dashboard">
      <h3>My Dashboard</h3>
      <div className="progress">
          <div className="determinate" style={{width: '50%'}}></div>
      </div>
    </div>)
  }
}


export default Dashboard