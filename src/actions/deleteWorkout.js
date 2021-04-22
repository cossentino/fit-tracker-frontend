import { currentUser, deleteConfObj } from '../library'

const deleteWorkout = (workout_id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${currentUser()}/workouts/${workout_id}`, deleteConfObj())
    .then(() => dispatch({type: "DELETE_WORKOUT", id: workout_id }))
  }
}

export default deleteWorkout