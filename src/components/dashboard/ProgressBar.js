import React from 'react'
import { progressPercentage, currentMonthMilesBySport } from '../../library'


const ProgressBar = props => {
  
  return (
    <div>
      { props.goal ?
      <div>
        <h5>This month's goal: </h5>
        <div class="container">
          <p>{props.goal.attributes.description}</p>
          <p>Goal mileage: {props.goal.attributes.miles}</p>
          <p>Mileage This Month: {currentMonthMilesBySport(props.goal)}</p>
        </div>
        <h6>You are {progressPercentage(props.goal)} of the way toward this month's goal!</h6>
        <div className="progress">
          <div className="determinate" style={{width: progressPercentage(props.goal)}}></div>
        </div>
      </div> : null }
    </div>
  )
}

export default ProgressBar