import React from 'react'

const Workout = props => {
  const myWorkout = props.workout.attributes
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{`${myWorkout.date} - ${myWorkout.workout_type}`}</span>
            <p>{myWorkout.miles}</p>
            <p>{myWorkout.notes}</p>
            <p>{myWorkout.exert}</p>
          </div>
        </div>
      </div>
    </div>        
  )

}


export default Workout