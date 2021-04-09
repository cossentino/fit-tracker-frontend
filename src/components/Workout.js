import React from 'react'
import { formatDate, capitalizeWord } from '../library'

const Workout = props => {

  const myWorkout = props.workout.attributes
  return (
    <div style={{display: 'inline'}}>
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{`${formatDate(myWorkout.date)} - ${capitalizeWord(myWorkout.workout_type)}`}</span>
            <p>Miles: {myWorkout.miles}</p>
            <p>Perceived Exertion: {myWorkout.exert}</p>
            <p>Pace: {myWorkout.pace}</p>
            <p>Notes: {myWorkout.notes}</p>
            <button className="btn" onClick={() => {
              props.delete(props.workout.id)
            }}
            >Delete Workout</button>
          </div>
        </div>
      </div>
    </div>        
  )
}



export default Workout