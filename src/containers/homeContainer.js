import React, { Component } from 'react'
import fetchWorkouts from '../actions/fetchWorkouts'
import { connect } from 'react-redux'


class HomeContainer extends Component {


  componentDidMount() {
    this.props.fetchWorkouts()
  }

  render() {
    return (
      <div></div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWorkouts: () => dispatch(fetchWorkouts())
  }
}



export default connect(null, mapDispatchToProps)(HomeContainer)