const fetchWorkouts = (user_id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${user_id}/workouts`)
    .then(resp => resp.json() )
    .then(json => {
        dispatch({ type: "ADD_WORKOUTS", workouts: json.data })
        console.log(json)
        return null
    })
  }
}

export default fetchWorkouts