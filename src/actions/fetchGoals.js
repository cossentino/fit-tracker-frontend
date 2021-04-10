const fetchGoals = (user_id) => {
  if (user_id) {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/users/${user_id}/goals`)
      .then(resp => resp.json() )
      .then(json => {
          dispatch({ type: "ADD_GOALS", goals: json.data })
      })
    }
  } else { return dispatch => dispatch({type: "ADD_GOALS", goals: [] })}
}

export default fetchGoals