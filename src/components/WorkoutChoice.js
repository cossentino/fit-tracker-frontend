// import M from "materialize-css"
import React, { Component } from 'react'
// import { postConfObj, currentUser } from '../library'
import { Link } from 'react-router-dom'
import bike from '../images/bike.png'
import run from '../images/run.png'
import swim from '../images/swim.png'







class WorkoutChoice extends Component {

  constructor() {
    super()
    this.state = {
    }
  }

  // handleClick = e => {



  render() {
    return (
      <div className="row container workout-choice">
        <h3 style={{paddingBottom: '30px'}}>Choose a Workout Type: </h3>
        <div className="row">
          <Link to="/workouts/create/run"><img style={{height: "250px"}} src={run} alt="runner" /></Link>
          <Link to="/workouts/create/swim"><img style={{height: "250px", float: 'right'}} src={swim} alt="swimmer" /></Link>
          <Link to="/workouts/create/bike"><img style={{height: "250px", float: 'right'}} src={bike} alt="cyclist" /></Link>
        </div>
      </div>
      )
  }


    


}





export default WorkoutChoice