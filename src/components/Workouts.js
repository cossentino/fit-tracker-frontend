import React from 'react'
import Workout from './Workout'
import { store } from '../index'

const Workouts = props => {
  console.log(store.getState())
  return (
    <div id="workouts" className="container">
      <h1>My Workouts</h1>
      <div className="row">
        {props.workouts.map( w => {
          return <Workout workout={w} delete={props.delete} />
        })}
      </div>
    </div>
  )
}


export default Workouts