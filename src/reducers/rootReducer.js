
const initialState = 
  { 
    workouts: [],
    logged_in: false
  }



const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WORKOUTS':
      return {...state, workouts: action.workouts }
    case 'SET_USER':
      return { ...state , user: action.userInfo, logged_in: true }
    case 'DELETE_WORKOUT':
      return { ...state, workouts: state.workouts.filter( w => w.id !== action.id )}
    case 'LOG_OUT':
      return initialState
    default:
      return state
  }
}



export default rootReducer