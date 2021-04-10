import React from 'react'
import { Link } from 'react-router-dom'
import { store } from '../index'

const NavBar = props => {

  const logOutButton = () => {
    return (
      <button className="btn" 
      onClick={() => {
      localStorage.clear()
      store.dispatch({type: 'LOG_OUT'})
      }}
      ><Link to="/login">Log Out</Link>
    </button>
  )}

  return (
    <nav style={{backgroundColor: '#0647C8'}}>
      <div className="nav-wrapper container">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/workouts">Workouts</Link></li>
          <li><Link to="/workouts/new">Create Workout</Link></li>
          {props.loggedIn ? logOutButton() : <li><Link to="/login">Log In</Link></li>}
          {props.loggedIn ? null : <li><Link to="/signup">Sign Up</Link></li>}
        </ul>
      </div>
    </nav>     
  )

}


export default NavBar


        

