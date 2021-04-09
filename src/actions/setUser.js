

const setUser = (userInfo) => {
  return (dispatch) => {
        dispatch({ type: "ADD_USER", userInfo })
  }
}

export default setUser