import React from 'react'
import {capitalizeWord, progressPercentage } from '../../library'

const Goal = props => {

  const myGoal = props.goal.attributes
  
  return (
    <div>
      <div className="col s4 m4" style={{display: 'inline'}}>
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
                <span className="card-title">{`${myGoal.description}`}</span>
                <p>Sport: {capitalizeWord(myGoal.sport)}</p>
                <p>Mileage Goal: {myGoal.miles}</p>
                <p>Month: {myGoal.month}</p>
                <p>Progress: { progressPercentage(props.goal)} </p>
            </div>
            <div className="card-action">
              <button 
                  className="btn" 
                  onClick={() => {
                    props.delete(props.goal.id)
                  }}
                >Delete Goal</button>              
            </div>
          </div>
        </div>
      </div>
    </div>        
  )
}

export default Goal