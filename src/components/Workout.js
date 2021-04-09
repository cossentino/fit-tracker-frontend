import React from 'react'


const formatDate = date => {
  const dSplit = new Date(date).toDateString().split(" ")
  return `${dSplit[1]} ${dSplit[2]}, ${dSplit[3]}`
}



const Workout = props => {
  const myWorkout = props.workout.attributes
  return (
    <div style={{display: 'inline'}}>
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{`${formatDate(myWorkout.date)} - ${myWorkout.workout_type}`}</span>
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