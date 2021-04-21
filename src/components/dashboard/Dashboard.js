import React, { Component } from 'react'
import { currentMonthWorkouts } from '../../library'
import DashboardWorkouts from '../../components/dashboard/DashboardWorkouts'
import ProgressBar from './ProgressBar'
import { store } from '../../index'


class Dashboard extends Component {

  render() {
    return( 
      <div className="container" id="dashboard">
        <h3>My Dashboard</h3>
        <div>
          <div className="row">
            <h6 style={{float: 'left'}}>Workouts this month: </h6>
          </div>
          <DashboardWorkouts workouts={currentMonthWorkouts(this.props.workouts)} delete={this.props.delete} />
        </div>
        <ProgressBar goal={store.getState().goals[0]} />
      </div>
  )}
}



export default Dashboard