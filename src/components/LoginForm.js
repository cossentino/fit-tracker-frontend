// import M from "materialize-css"
import React, { Component } from 'react'



class CreateWorkoutForm extends Component {

  // componentDidMount() {
  //   M.AutoInit()
  // }

  constructor() {
    super()
    this.state = {
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
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    fetch('http://localhost:3000/api/v1/users/login', configurationObject)
    .then(resp => resp.json())
    .then(json => console.log(json))
  }


  render() {
    return (
      <div id="login_form" className="container">
        <h1>Log In Here</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" onChange={this.handleChange}/>
          <label>Password</label>
          <input onChange={this.handleChange} type="password" name="password" />
          <input type="submit" value="submit" />
        </form>
      </div>

    )
  }
}



export default CreateWorkoutForm