import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import fetchWorkouts from '../actions/fetchWorkouts'
import deleteWorkout from '../actions/deleteWorkout'
import Workouts from '../components/Workouts'
import { connect } from 'react-redux'
import { currentUser } from '../library'



class WorkoutsContainer extends Component {

  currentUser = currentUser()

  constructor() {
    super()
    this.state = {
      filters: {
        date: "all",
        type: "run"
      }
    }
  }
  
  componentDidMount() {
    if (this.currentUser) {
      this.props.fetchWorkouts(currentUser())
    }
  }

  filterWorkouts(type, date) {
    if (this.props.workouts) {
      if (type !== "all") {
        return this.props.workouts.filter(w => w.attributes.workout_type === type )
      } else {
        return this.props.workouts
      }
    } else { 
      return null
    }
  }

  render() {
    return (
      <div>
        { this.currentUser ? 
          <div id="workouts"><Workouts workouts={this.filterWorkouts(this.state.filters.type, this.state.filters.date)} delete={this.props.deleteWorkout}/></div> 
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
  return {
    workouts: state.workouts,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)