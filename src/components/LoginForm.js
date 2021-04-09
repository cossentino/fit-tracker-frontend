// import M from "materialize-css"
import React, { Component } from 'react'
import { connect } from 'react-redux'
import setUser from '../actions/setUser'



class CreateWorkoutForm extends Component {

  // componentDidMount() {
  //   M.AutoInit()
  // }

  constructor() {
    super()
    this.state = {
      user: {
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
      user: {...this.state.user, [name]: value}
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
      body: JSON.stringify( { user: this.state.user } )
    };
      fetch('http://localhost:3000/api/v1/users/login', configurationObject)
      .then(resp => resp.json())
      .then(json => {
        this.props.setUser({jwt: json.jwt, user_id: json.user.data.id })
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
        {this.state.user.username}
        {this.state.user.password}
        {this.props.user ? <p>{this.props.user.jwt}</p> : null }
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: userInfo => dispatch(setUser(userInfo))
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkoutForm)