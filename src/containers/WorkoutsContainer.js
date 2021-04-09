import React, { Component } from 'react'
import fetchWorkouts from '../actions/fetchWorkouts'
import deleteWorkout from '../actions/deleteWorkout'
import Workouts from '../components/Workouts'
import { connect } from 'react-redux'



class WorkoutsContainer extends Component {

  componentDidMount() {
    this.props.fetchWorkouts(this.props.user.user_id)
  }

  render() {
    return <div id="workouts"><Workouts workouts={this.props.workouts} delete={this.props.deleteWorkout}/></div>
  }
}



const mapDispatchToProps = dispatch => {
  return {
    fetchWorkouts: (user_id) => dispatch(fetchWorkouts(user_id)),
    deleteWorkout: (workout_id) => dispatch(deleteWorkout(workout_id))
  }
}

const mapStateToProps = state => {
  return {
    workouts: state.workouts,
    user: JSON.parse(localStorage.getItem('user'))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)