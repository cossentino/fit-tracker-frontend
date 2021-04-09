

const rootReducer = (state = { user: {}, workouts: [], logged_in: false }, action) => {
  switch (action.type) {
    case 'ADD_WORKOUTS':
      return {...state, workouts: action.workouts }
    case 'ADD_USER':
      return { ...state , user: action.userInfo }
    default:
      return state
  }
}



export default rootReducer