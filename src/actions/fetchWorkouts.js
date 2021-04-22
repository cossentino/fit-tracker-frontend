import {getConfObj} from '../library'

const fetchWorkouts = (user_id) => {
  if (user_id) {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/users/${user_id}/workouts`, getConfObj())
      .then(resp => resp.json() )
      .then(json => {
          dispatch({ type: "ADD_WORKOUTS", workouts: json.data })
      })
    }
  } else { return dispatch => dispatch({type: "ADD_WORKOUTS", workouts: [] })}
}

export default fetchWorkouts