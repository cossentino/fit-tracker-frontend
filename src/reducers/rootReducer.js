

const rootReducer = (state = { user: {user_id: 1}, workouts: [], logged_in: false }, action) => {
  switch (action.type) {
    case 'ADD_WORKOUTS':
      return {...state, workouts: action.workouts }
    case 'ADD_USER':
      return { ...state , user: action.userInfo, logged_in: true }
    case 'DELETE_USER':
      return { ...state, workouts: state.workouts.filter( w => w.id !== action.id )}
    default:
      return state
  }
}



export default rootReducer