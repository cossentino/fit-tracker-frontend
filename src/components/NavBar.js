import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { store } from '../index'
import { currentUser } from '../library'


const NavBar = props => {
  const history = useHistory();

  function returnToLogin() {
    history.push("/login");
  }


  const logOutButton = () => {
    return (
      <button className="btn" 
      onClick={() => {
      localStorage.clear()
      store.dispatch({type: 'LOG_OUT'})
      returnToLogin()
      }}>
        <Link to="/login">Log Out</Link>
      </button>
  )}

  return (
    <nav style={{backgroundColor: '#0647C8'}}>
      <div className="nav-wrapper container">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/workouts">Workouts</Link></li>
          <li><Link to="/workouts/new">Log Workout</Link></li>
          <li><Link to="/goals">Goals</Link></li>
          <li><Link to="/goals/create">Create New Goal</Link></li>
          {currentUser() ? logOutButton() : <li><Link to="/login">Log In</Link></li>}
          {currentUser() ? null : <li><Link to="/signup">Sign Up</Link></li>}
        </ul>
      </div>
    </nav>     
  )
}

export default NavBar


        

