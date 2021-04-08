import React from 'react'
// import { BrowserRouter as Router, Link } from 'react-router-dom'

const NavBar = props => {
  return (
    <nav style={{backgroundColor: '#0647C8'}}>
      <div className="nav-wrapper container">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>     
  )

}


export default NavBar


        

