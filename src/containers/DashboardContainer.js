import React, { Component } from 'react'
import { currentUser } from '../library'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Dashboard from '../components/dashboard/Dashboard'
import fetchWorkouts from '../actions/fetchWorkouts'
import fetchGoals from '../actions/fetchGoals'
import deleteWorkout from '../actions/deleteWorkout'



class DashboardContainer extends Component {

  componentDidMount() {
    this.props.fetchGoals(currentUser())
    this.props.fetchWorkouts(currentUser())
  }

  render() {
    return(
    <div id="dashboard-container">
    { currentUser() ?  
      <Dashboard workouts={this.props.workouts} delete={this.props.deleteWorkout}/>
      : <Redirect to="/login" />}
    </div>  
  )}
}


const mapDispatchToProps = dispatch => {
  return {
    fetchWorkouts: (user_id) => dispatch(fetchWorkouts(user_id)),
    fetchGoals: (user_id) => dispatch(fetchGoals(user_id)),
    deleteWorkout: (workout_id) => dispatch(deleteWorkout(workout_id))
  }
}

const mapStateToProps = state => {
  return { workouts: state.workouts }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)