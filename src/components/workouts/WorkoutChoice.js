// import M from "materialize-css"
import React from 'react'
import { currentUser } from '../../library'
import { Link, Redirect } from 'react-router-dom'
// import bike from '../../images/bike.png'
import run from '../../images/run.png'
import swim from '../../images/swim.png'


const WorkoutChoice = () => {

  const myUser = currentUser()

    return (
      <div className="row container workout-choice">
        {myUser ?
          <div>
            <h3 style={{paddingBottom: '30px'}}>Choose a Workout Type: </h3>
            <div className="row">
              <Link to="/workouts/create/run"><img style={{height: "250px"}} src={run} alt="runner" /></Link>
              <Link to="/workouts/create/swim"><img style={{height: "250px", float: 'right'}} src={swim} alt="swimmer" /></Link>
              <Link to="/workouts/create/bike"><img style={{height: "250px", float: 'right'}} src={'http://www.clipartbest.com/cliparts/ncX/xoB/ncXxoBgei.svg'} alt="cyclist" /></Link>
            </div>
          </div> 
          : <Redirect to="/login" />}
      </div>
      )
}

export default WorkoutChoice