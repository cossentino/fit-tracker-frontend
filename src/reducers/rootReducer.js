

const rootReducer = (state = { user: {}, workouts: [] }, action) => {
  switch (action.type) {
    case 'ADD_WORKOUTS':
      debugger
      console.log(action.workouts)
      return null
    default:
      return state
  }
}

export default rootReducer