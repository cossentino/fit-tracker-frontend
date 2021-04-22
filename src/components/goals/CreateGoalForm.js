import React, { Component } from 'react'
import M from 'materialize-css'
import { currentUser, postConfObj, monthOptions } from '../../library'
import { Redirect, withRouter } from 'react-router-dom'
import { formatErrors } from '../../library'



class CreateGoalForm extends Component {

  constructor() {
    super()
    this.state = {
      description: "",
      month: "",
      miles: "",
      sport: "run"
    }
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
    });
    M.AutoInit()
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const body = { goal: {...this.state } }
    fetch(`http://localhost:3000/api/v1/users/${currentUser()}/goals`, postConfObj(body))
    .then(resp => resp.json())
    .then(json => {
      if (!json.errors) {
        this.props.history.push('/goals')
      } else {
        alert(formatErrors(json.errors))
      }
    })
  }


  render() {
    return (
      <div id="create_workout_form" className="container">
        {currentUser() ?
        <div>
          <h1>Create Goal</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Goal Description:</label>
            <input type="text" name="description" onChange={this.handleChange} value={this.state.description}/>
            <div className="row">
            <label>Goal Sport:</label>
              {/* <input type="text" name="sport" onChange={this.handleChange} value={this.state.sport}/> */}
              <select name="sport" onChange={this.handleChange} value={this.state.sport}>
                <option value="run">Run</option>
                <option value="bike">Bike</option>
                <option value="swim">Swim</option>
              </select>
            </div>
            <label>Goal Miles: </label>
            <input type="text" name="miles" onChange={this.handleChange} value={this.state.miles}/>
            <label>Goal Month:</label>
            <select name="month" onChange={this.handleChange} value={this.state.month}>
              {monthOptions()}
            </select>
            <input className="btn" type="submit" value="submit" />
          </form>
        </div>
        : <Redirect to="/login" />}
      </div>

    )
  }
}

export default withRouter(CreateGoalForm)