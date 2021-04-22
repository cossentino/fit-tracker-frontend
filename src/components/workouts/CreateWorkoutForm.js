import M from "materialize-css"
import React, { Component } from 'react'
import { postConfObj, currentUser, capitalizeWord } from '../../library'
import { withRouter, Redirect } from 'react-router-dom'


class CreateWorkoutForm extends Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.timepicker');
      var instances = M.Timepicker.init(elems, { twelveHour: false });
    });
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
            <h1>{`Log a New ${capitalizeWord(this.state.workout_type)}`}</h1>
            <form onSubmit={this.handleSubmit}>
              <label>Date</label>
              <input type="date" name="date" onChange={this.handleChange} value={this.state.date}/>
              <label>Location</label>
              <input type="text" name="location" onChange={this.handleChange} value={this.state.location}/>
              <label>Miles</label>
              <input onChange={this.handleChange} type="text" name="miles" value={this.state.miles} />
              <label>Perceived Exertion (1-10) </label>
              <div className="row">
                <input type="range" name="exert" min="1" max="10" onChange={this.handleChange} value={this.state.exert}/> <span style={{float:"right", fontSize:"18px"}}>{this.state.exert}</span>
              </div>
              <label>Pace</label>
              <input type="text" className="timepicker" name="pace" onSelect={this.handleChange} value={this.state.pace} />
              <label>Notes</label>
              <textarea name="notes" onChange={this.handleChange} value={this.state.notes}/>
              <input type="submit" value="submit" className="btn" />
            </form>
          </div>  
          : <Redirect to="/login" /> }
      </div>
      )
  }


    


}





export default withRouter(CreateWorkoutForm)