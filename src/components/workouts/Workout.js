import React from 'react'
import { formatDate, capitalizeWord } from '../../library'

const Workout = props => {

  const myWorkout = props.workout.attributes
  
  
  return (
    <div>
      <div className="col s4 m4" style={{display: 'inline'}}>
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
                <span className="card-title">{`${capitalizeWord(myWorkout.workout_type)} - ${formatDate(myWorkout.date)}`}</span>
                <p>Miles: {myWorkout.miles}</p>
                <p>Perceived Exertion: {myWorkout.exert}</p>
                <p>Pace: {myWorkout.pace}</p>
                <p>Notes: {myWorkout.notes}</p>
            </div>
            <div className="card-action">
              <button 
                className="btn" 
                onClick={() => {
                  props.delete(props.workout.id)
                }}
              >Delete Workout</button>
            </div>
          </div>
        </div>
      </div>
    </div>        
  )
}

export default Workout
