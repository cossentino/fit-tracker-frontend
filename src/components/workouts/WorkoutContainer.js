import { render } from "react-dom"
import { React, Component } from 'react'
import Workout from '../workouts/Workout'
class WorkoutContainer extends Component {

  constructor() {
    super()
    this.state = {
      likes: 0
    }
  }


  render() {
    return (
      <Workout workout={this.props.workout} key={this.props.key} delete={this.props.delete} />
    )
  }
}


export default WorkoutContainer