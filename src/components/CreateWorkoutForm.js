import M from "materialize-css"
import React, { Component } from 'react'
import { postConfObj, currentUser } from '../library'
import { withRouter, Redirect } from 'react-router-dom'





class CreateWorkoutForm extends Component {

  componentDidMount() {
    M.AutoInit()
  }

  constructor(props) {
    super(props)
    this.state = {
      date: "",
      workout_type: this.props.match.params.type,
      miles: "",
      exert: 0,
      pace: "",
      notes: "",
      location: "",
    }
  }

  currentUser = currentUser()

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const body = { ...this.state }
    fetch(`http://localhost:3000/api/v1/users/${currentUser()}/workouts`, postConfObj(body))
    .then(resp => resp.json())
    .then(() => this.props.history.push('/workouts'))
  }


  render() {
    return (
      <div className="container">
        {this.currentUser ? 
          <div>
            <h1>Create a New Workout</h1>
            <form onSubmit={this.handleSubmit}>
              <label>Date</label>
              <input type="date" name="date" onChange={this.handleChange} value={this.state.date}/>
              <label>Workout Type</label>
              <select name="workout_type" onChange={this.handleChange} value={this.state.workout_type}>
                <option value="run">Run</option>
                <option value="swim">Swim</option>
                <option value="bike">Bike</option>
              </select>
              <label>Miles</label>
              <input onChange={this.handleChange} type="text" name="miles" value={this.state.miles} />
              <label>Perceived Exertion (1-10) </label>
              <input type="range" name="exert" min="1" max="10" onChange={this.handleChange} value={this.state.exert}/>
              {this.state.exert}
              <label>Pace</label>
              <input type="time" name="pace" onChange={this.handleChange} value={this.state.pace}/>
              <label>Notes</label>
              <textarea name="notes" onChange={this.handleChange} value={this.state.notes}/>
              <label>Location</label>
              <input type="text" name="location" onChange={this.handleChange} value={this.state.location}/>
              <input type="submit" value="submit" />
            </form>
          </div>  
          : <Redirect to="/login" /> }
      </div>
      )
  }


    


}





export default withRouter(CreateWorkoutForm)