import React, { Component } from 'react'



class CreateWorkoutForm extends Component {

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
    let body = {
      ...this.state,
      user_id: 1
    }
    fetch('http://localhost:3000/users/1/workouts', {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
  }


  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <label>Date</label>
        <input type="date" name="workout_type" />
        <label>Workout Type</label>
        <input type="text" name="workout_type" />
        <label>Miles</label>
        <input onChange={this.handleChange} type="text" name="miles" />
        <label>Perceived Exertion (1-10) </label>
        <input type="range" name="exert" min="1" max="10" onChange={this.handleChange}/>
        {this.state.exert}
        <label>Pace</label>
        <input type="time" name="pace" />
        <label>Notes</label>
        <textarea name="notes" />
        <label>Location</label>
        <input type="text" name="location" />
        <input type="submit" value="submit" />
        {this.state.miles}
      </form>

    )
  }
}



export default CreateWorkoutForm