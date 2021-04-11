import React from 'react'
import Workout from '../workouts/Workout'
import M from 'materialize-css'

const DashboardWorkouts = props => {
    M.AutoInit()
    return (
      <div id="workouts" className="container">
        <div className="row">
          {props.workouts.map( w => {
            return <Workout workout={w} key={w.id} delete={props.delete}  />
          })}
        </div>
      </div>
    )
}


export default DashboardWorkouts