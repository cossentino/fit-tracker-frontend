

const rootReducer = (state = { user: {}, workouts: [] }, action) => {
  switch (action.type) {
    case 'ADD_WORKOUTS':
      return {...state, workouts: action.workouts }
    default:
      return state
  }
}

export default rootReducer