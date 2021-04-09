import React from 'react'
import Workout from './Workout'

const Workouts = props => {
  return (
    <div id="workouts" className="container">
      <h1>My Workouts</h1>
      <div className="row">
        {props.workouts.map( w => {
          return <Workout workout={w} />
        })}
      </div>
    </div>
  )
}


export default Workouts