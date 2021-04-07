const fetchWorkouts = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/1/workouts')
    .then(resp => resp.json() )
    .then(json => {
        dispatch({ type: "ADD_WORKOUTS", workouts: json.data })
    })
  }
}

export default fetchWorkouts