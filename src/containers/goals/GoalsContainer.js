import React, { Component } from 'react'
import { connect } from 'react-redux'
import Goals from '../components/goals/Goals'



class GoalsContainer extends Component {


  render(){
    return (
      <div id="goals-container">
        <Goals goals={this.props.goals} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { goals: state.goals }
}


export default connect(mapStateToProps)(GoalsContainer)