import React, { Component } from 'react'
import fetchWorkouts from '../actions/fetchWorkouts'
import { connect } from 'react-redux'
import Workout from './Workout'

class Workouts extends Component {

  componentDidMount() {
    this.props.fetchWorkouts()
  }

  render() {
    return (
      <div id="workouts" className="container">
        <h1>My Workouts</h1>
        <div className="row">
          {this.props.workouts.map( w => {
            return <Workout workout={w} />
          })}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWorkouts: () => dispatch(fetchWorkouts())
  }
}

const mapPropsToState = state => {
  return {
    workouts: state.workouts,
  }
}


export default connect(mapPropsToState, mapDispatchToProps)(Workouts)