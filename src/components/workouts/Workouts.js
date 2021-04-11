import React from 'react'
import Workout from './Workout'
import M from 'materialize-css'

const Workouts = props => {
    M.AutoInit()
    return (
      <div id="workouts" className="container">
        <h1>My Workouts</h1>
        <h6>Filter by Sport: </h6>
        <select id="filter-select" 
          onChange={() => props.filter(document.getElementById('filter-select').value)}>
          <option value="all">All</option>
          <option value="run">Run</option>
          <option value="bike">Bike</option>
          <option value="swim">Swim</option>
        </select>
        <div className="row">
          {props.workouts.map( w => {
            return <Workout workout={w} key={w.id} delete={props.delete}  />
          })}
        </div>
      </div>
    )
}


export default Workouts