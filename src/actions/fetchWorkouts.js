const fetchWorkouts = () => {
  return (dispatch) => {
    fetch('https://localhost:3000/api/v1/users/1/workouts')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "ADD_WORKOUTS", workouts: json })
      })
  }
}

export default fetchWorkouts