import React from 'react'
import Goal from './Goal'
import M from 'materialize-css'

const Goals = props => {
    M.AutoInit()
    return (
      <div id="goals" className="container">
        <h1>My Goals</h1>
        <div className="row">
          {props.goals.map( g => {
            return <Goal goal={g} key={g.id} delete={props.delete}/>
          })}
        </div>
      </div>
    )
}


export default Goals