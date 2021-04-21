import React from 'react'
import { connect } from 'react-redux'
import Goals from '../../components/goals/Goals'
import { currentUser } from '../../library'
import fetchGoals from '../../actions/fetchGoals'
import { Redirect } from 'react-router-dom'


const GoalsContainer = props => {

  React.useEffect(() => {
    return currentUser() ? props.fetchGoals(currentUser()) : null
  })

    return (
      <div>
        {currentUser() ? 
        <div id="goals-container">
          <Goals goals={props.goals} />
        </div>
        : <Redirect to="/login" />}
      </div>
    )
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