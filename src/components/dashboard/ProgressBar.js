import React from 'react'
import { progress } from '../../library'


const ProgressBar = props => {
  
  
  
  
  
  return (
    <div>
      { props.goal ?
      <div>
        <h6>This month's goal: </h6>
        <p>{props.goal.attributes.description}</p>
        <p>Goal mileage: {props.goal.attributes.miles}</p>
        <h6>You are {progress(props.goal)} of the way toward this month's goal!</h6>
        <div className="progress">
          <div className="determinate" style={{width: progress(props.goal)}}></div>
        </div>
      </div> : null }
    </div>
  )
}

export default ProgressBar