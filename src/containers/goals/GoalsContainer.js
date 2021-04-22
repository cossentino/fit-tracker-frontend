import React, { Component } from 'react'
import { connect } from 'react-redux'
import Goals from '../../components/goals/Goals'
import { currentUser } from '../../library'
import fetchGoals from '../../actions/fetchGoals'
import { Redirect } from 'react-router-dom'
import deleteGoal from '../../actions/deleteGoal'


class GoalsContainer extends Component {

    componentDidMount() {
      if (currentUser()) {
        this.props.fetchGoals(currentUser())
      }
    }

    render() {

      return (
        <div>
          {currentUser() ? 
          <div id="goals-container">
            <Goals goals={this.props.goals} delete={this.props.deleteGoal}/>
          </div>
          : <Redirect to="/login" />}
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
    deleteGoal: (goal_id) => dispatch(deleteGoal(goal_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer)