import { store } from '../index'

const deleteWorkout = (workout_id) => {
  return (dispatch) => {
    const id = store.getState().user.user_id
    fetch(`http://localhost:3000/api/v1/users/${id}/workouts`)
    .then(resp => resp.json() )
    .then(json => {
      dispatch({type: "DELETE_WORKOUT", id: workout_id})
    })
  }
}

export default deleteWorkout