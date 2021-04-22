import React from 'react'
import {capitalizeWord, progressPercentage, numericMonthToString } from '../../library'

const Goal = props => {

  const myGoal = props.goal.attributes
  return (
    <div>
      <div className="col s4 m4" style={{display: 'inline'}}>
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
                <span className="card-title">{`${myGoal.description}`}</span>
                <span>Month: {numericMonthToString(myGoal.month)}</span>
                <p>Sport: {capitalizeWord(myGoal.sport)}</p>
                <p>Mileage: {myGoal.miles}</p>
                <p>Progress: { progressPercentage(props.goal)} </p>
            </div>
            <div className="card-action">
              <button 
                  className="btn" 
                  onClick={() => props.delete(props.goal.id)
                  }
                >Delete Goal</button>              
            </div>
          </div>
        </div>
      </div>
    </div>        
  )
}

export default Goal