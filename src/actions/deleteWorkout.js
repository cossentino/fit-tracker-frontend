import { store } from '../index'
import { Redirect } from 'react-router-dom'

const deleteWorkout = (workout_id) => {
  return (dispatch) => {
    const id = store.getState().user.user_id
    fetch(`http://localhost:3000/api/v1/users/${id}/workouts/${workout_id}`, {method: "DELETE"})
    .then(() => dispatch({type: "DELETE_WORKOUT", id: workout_id }))
  }
}

export default deleteWorkout