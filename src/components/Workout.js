import React from 'react'

const Workout = props => {
  const myWorkout = props.workout.attributes
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{`${myWorkout.date} - ${myWorkout.workout_type}`}</span>
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