import React, { Component } from 'react'
import { currentUser } from '../library'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Dashboard from '../components/dashboard/Dashboard'



class DashboardContainer extends Component {

  render() {
    return(
    <div id="dashboard-container">
    { currentUser() ?  
      <Dashboard workouts={this.props.workouts} />
      : <Redirect to="/login" />}
    </div>  
  )}
}



const mapStateToProps = state => {
  return { workouts: state.workouts }
}

export default connect(mapStateToProps)(DashboardContainer)