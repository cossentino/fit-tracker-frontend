import React, { Component } from 'react'
import fetchWorkouts from '../actions/fetchWorkouts'
import { connect } from 'react-redux'


class HomeContainer extends Component {

  componentDidMount() {
    this.props.fetchWorkouts()
  }

  render() {
    return (
      <div>
        {this.props.workouts.map( w => {
          return (
            <p>{w.attributes.workout_type}</p>
          )
        })}
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
    workouts: state.workouts
  }
}



export default connect(mapPropsToState, mapDispatchToProps)(HomeContainer)