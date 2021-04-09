import M from "materialize-css"
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postConfObj } from '../library'



class CreateWorkoutForm extends Component {

  componentDidMount() {
    M.AutoInit()
  }

  constructor() {
    super()
    this.state = {
      date: "",
      workout_type: "",
      miles: "",
      exert: null,
      pace: "",
      notes: "",
      location: "",
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    debugger
    e.preventDefault()
    const body = { ...this.state }
    fetch(`http://localhost:3000/api/v1/users/${this.props.user.user_id}/workouts`, postConfObj(body))
    .then(resp => resp.json())
  }


  render() {
    return (
      <div id="create_workout_form" className="container">
        <h1>Create a New Workout</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Date</label>
          <input type="date" name="date" onChange={this.handleChange}/>
          <label>Workout Type</label>
          <select name="workout_type" onChange={this.handleChange}>
            <option value="run">Run</option>
            <option value="swim">Swim</option>
            <option value="bike">Bike</option>
          </select>
          <label>Miles</label>
          <input onChange={this.handleChange} type="text" name="miles" />
          <label>Perceived Exertion (1-10) </label>
          <input type="range" name="exert" min="1" max="10" onChange={this.handleChange}/>
          <label>Pace</label>
          <input type="time" name="pace" onChange={this.handleChange}/>
          <label>Notes</label>
          <textarea name="notes" onChange={this.handleChange}/>
          <label>Location</label>
          <input type="text" name="location" onChange={this.handleChange}/>
        </form>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}



export default connect(mapStateToProps)(CreateWorkoutForm)