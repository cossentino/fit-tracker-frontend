import React, { Component } from 'react'
import fetchWorkouts from '../actions/fetchWorkouts'
import Workouts from '../components/Workouts'
import { connect } from 'react-redux'



class WorkoutsContainer extends Component {


  componentDidMount() {
    this.props.fetchWorkouts(this.props.user.user_id)
  }

  render() {
    return (
      <Workouts workouts={this.props.workouts} />
    )
  }




}


const mapDispatchToProps = dispatch => {
  return {
    fetchWorkouts: (user_id) => dispatch(fetchWorkouts(user_id))
  }
}

const mapStateToProps = state => {
  return {
    workouts: state.workouts,
    user: state.user
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer)