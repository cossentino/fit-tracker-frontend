import { currentUser } from '../library'

const deleteGoal = (goal_id) => {
  debugger
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${currentUser()}/goals/${goal_id}`, {method: "DELETE"})
    .then(() => dispatch({type: "DELETE_GOAL", id: goal_id }))
  }
}

export default deleteGoal