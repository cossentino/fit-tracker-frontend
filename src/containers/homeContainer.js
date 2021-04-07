import React, { Component } from 'react'
import fetchWorkouts from '../actions/fetchWorkouts'
import { connect } from 'react-redux'
import Workout from '../components/Workout'


class HomeContainer extends Component {

  componentDidMount() {
    this.props.fetchWorkouts()
  }

  render() {
    return (
      <div>
        {this.props.workouts.map( w => {
          return <Workout workout={w} />
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