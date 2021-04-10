import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import fetchWorkouts from '../actions/fetchWorkouts'
import deleteWorkout from '../actions/deleteWorkout'
import Workouts from '../components/workouts/Workouts'
import { connect } from 'react-redux'
import { currentUser } from '../library'



class WorkoutsContainer extends Component {

  currentUser = currentUser()

  constructor() {
    super()
    this.state = {
      filters: {
        date: "all",
        type: "all"
      }
    }
  }
  
  componentDidMount() {
    if (this.currentUser) {
      this.props.fetchWorkouts(currentUser())
    }
  }

  displayFilteredWorkouts = (type) => {
    if (type !== "all") {
      return this.props.workouts.filter(w => w.attributes.workout_type === type ) 
    } else { return this.props.workouts }
  }

  filter = (type, date) => {
    this.setState({filters: {type: type, date: date}})
  }

  render() {
    return (
      <div>
        { this.currentUser ? 
          <div id="workouts"><Workouts workouts={this.displayFilteredWorkouts(this.state.filters.type)} delete={this.props.deleteWorkout} filter={this.filter}/></div> 
          : <Redirect to="/login" /> }
      </div>
  )}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWorkouts: (user_id) => dispatch(fetchWorkouts(user_id)),
    deleteWorkout: (workout_id) => dispatch(deleteWorkout(workout_id))
  }
}

const mapStateToProps = state => {
  return { workouts: state.workouts }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)