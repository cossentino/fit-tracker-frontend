import React from 'react'
import {capitalizeWord } from '../../library'

const Workout = props => {

  const myGoal = props.goal.attributes
  
  return (
    <div>
      <div className="col s4 m4" style={{display: 'inline'}}>
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
                <span className="card-title">{`${capitalizeWord(myGoal.sport)}`}</span>
                <p>Description: {myGoal.description}</p>
                <p>Miles: {myGoal.miles}</p>
                <p>Month: {myGoal.month}</p>
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