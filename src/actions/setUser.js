

const setUser = userInfo => {
  return dispatch => {
    dispatch({ type: "SET_USER", userInfo })
  }
}

export default setUser