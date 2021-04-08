import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {
  return (
    <nav style={{backgroundColor: '#0647C8'}}>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/workouts">Workouts</Link></li>
          <li><Link to="/workouts/create">Create Workout</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      </div>
    </nav>     
  )

}


export default NavBar


        

