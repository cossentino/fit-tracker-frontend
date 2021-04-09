import React, { Component } from 'react'
import { connect } from 'react-redux'
import setUser from '../actions/setUser'
import { postConfObj } from '../library'



class LoginForm extends Component {

  constructor() {
    super()
    this.state = {
      credentials: {
        username: "",
        password: "",
      },
      jwt: "",
      user_id: ""
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      credentials: {...this.state.credentials, [name]: value}
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const body = { user: this.state.credentials }
      fetch('http://localhost:3000/api/v1/users/login', postConfObj(body))
      .then(resp => resp.json())
      .then(json => {
        const userObj = {
          token: json.jwt,
          user_id: json.user.data.id
        }
        localStorage.setItem('user', JSON.stringify(userObj))
        this.props.setUser(userObj)
      }).then(() => this.props.history.push('/workouts'))
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

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: userInfo => dispatch(setUser(userInfo))
  }
}


export default connect(null, mapDispatchToProps)(LoginForm)