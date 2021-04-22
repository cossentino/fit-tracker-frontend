import React from 'react'
import { progressPercentage, currentMonthMilesBySport } from '../../library'


const ProgressBar = props => {
  
  return (
    <div>
      { props.goal ?
      <div>
        <div id="goal_information" >
          <h5 style={{marginTop: '50px', display: 'inline-block' }}>This month's goal: {props.goal.attributes.description} </h5>
          <div className="container">
            <p>Goal mileage: {props.goal.attributes.miles}</p>
            <p>Mileage This Month: {currentMonthMilesBySport(props.goal)}</p>
          </div>
        </div>
        <h6>You are {progressPercentage(props.goal)} of the way toward your goal!</h6>
        <div className="progress" style={{marginBottom: '50px', display: 'inline-block' }}>
          <div className="determinate" style={{width: progressPercentage(props.goal)}}></div>
        </div>
      </div>
       : null }
    </div>
  )
}

export default ProgressBar