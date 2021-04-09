import { store } from '../index'

const deleteWorkout = (workout_id) => {
  return (dispatch) => {
    debugger
    const id = store.getState().user.user_id
    fetch(`http://localhost:3000/api/v1/users/${id}/workouts/${workout_id}`, {method: "DELETE"})
    .then(() => dispatch({type: "DELETE_WORKOUT", id: workout_id }))
  }
}

export default deleteWorkout