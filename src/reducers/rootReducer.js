
const initialState = 
  { 
    workouts: [],
    goals: [],
    loggedIn: false
  }



const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WORKOUTS':
      return {...state, workouts: action.workouts }
    case 'ADD_GOALS':
      return {...state , goals: action.goals }
    case 'SET_USER':
      return { ...state, loggedIn: true }
    case 'DELETE_WORKOUT':
      return { ...state, workouts: state.workouts.filter( w => w.id !== action.id )}
      case 'DELETE_GOAL':
        return { ...state, goals: state.goals.filter( g => g.id !== action.id )}
    case 'LOG_OUT':
      return initialState
    default:
      return state
  }
}



export default rootReducer