import M from "materialize-css"
import React, { Component } from 'react'
import { postConfObj } from '../library'
import { withRouter } from 'react-router-dom'




class CreateUserForm extends Component {

  // componentDidMount() {
  //   M.AutoInit()
  // }

  constructor() {
    super()
    this.state = {
      email: "",
      username: "",
      password: ""

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
    const body = { user: {...this.state } }
    fetch(`http://localhost:3000/api/v1/users`, postConfObj(body))
    .then(resp => resp.json())
    .then(json => console.log(json) )
  }


  render() {
    return (
      <div id="create_workout_form" className="container">
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
          <label>Email</label>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
          <label>password</label>
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
          <input type="submit" value="submit" />
        </form>
        {this.state.password}
      </div>

    )
  }
}





export default withRouter(CreateUserForm)