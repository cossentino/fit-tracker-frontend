import React, { Component } from 'react'
import { currentMonthWorkouts } from '../../library'
import DashboardWorkouts from '../../components/dashboard/DashboardWorkouts'



class Dashboard extends Component {

  render() {
    return( 
      <div className="container" id="dashboard">
        <h3>My Dashboard</h3>
        <h6>Workouts this month: </h6>
        <DashboardWorkouts workouts={currentMonthWorkouts(this.props.workouts)} />
        <h6>Progress towards this month's goal: </h6>
        <div className="progress">
            <div className="determinate" style={{width: '50%'}}></div>
        </div>
      </div>
  )}
}



export default Dashboard