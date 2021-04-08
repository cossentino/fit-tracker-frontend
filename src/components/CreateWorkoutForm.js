import React, { Component } from 'react'
import M from 'materialize-css'



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
    e.preventDefault()
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ ...this.state, user_id: 1 })
    };

    fetch('http://localhost:3000/api/v1/users/1/workouts', configurationObject)
    .then(resp => resp.json())
    .then(json => console.log(json))
  }


  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleSubmit}>
          <label>Date</label>
          <input type="date" name="workout_type" />
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

      </div>

    )
  }
}



export default CreateWorkoutForm