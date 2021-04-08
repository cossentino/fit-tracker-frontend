

const rootReducer = (state = { user: {}, workouts: [] }, action) => {
  switch (action.type) {
    case 'ADD_WORKOUTS':
      return {...state, workouts: action.workouts }
    case 'ADD_USER':
      return { ...state, user: action.user }
    default:
      return state
  }
}



export default rootReducer