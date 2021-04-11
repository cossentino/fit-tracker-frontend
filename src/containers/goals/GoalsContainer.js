import React, { Component } from 'react'
import { connect } from 'react-redux'
import Goals from '../../components/goals/Goals'
import { currentUser } from '../../library'
import fetchGoals from '../../actions/fetchGoals'
import filterMilesByMonth from '../../library'

class GoalsContainer extends Component {

  currentUser = currentUser()

  componentDidMount() {
    if (this.currentUser) {
      this.props.fetchGoals(this.currentUser)
    }
  }

  render(){
    return (
      <div id="goals-container">
        <Goals goals={this.props.goals} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { goals: state.goals,
          workouts: state.workouts }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGoals: (user_id) => dispatch(fetchGoals(user_id)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer)