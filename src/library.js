import { store } from './index'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ]


export const formatDate = date => {
  if (date) {
    let d1 = date.split("-")
    let d2 = d1.join(" ")
    let dSplit = new Date(d2).toDateString().split(" ")
    return `${dSplit[1]} ${dSplit[2]}, ${dSplit[3]}`
  } else { return null }
}

export const capitalizeWord = word => {
  if (typeof word === "string" && word !== "" ) {
    let wordArray = word.split("")
    wordArray[0] = wordArray[0].toUpperCase()
    return wordArray.join("")
  } else {
    return word
  }
}

export const postConfObj = body => {
  return {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": authorizationHeader()
      },
      body: JSON.stringify(body)
  }
}

export const getConfObj = () => {
  return { method: 'get', 
      headers: 
        { 'Authorization': authorizationHeader() } 
    }
}

export const deleteConfObj = () => {
    return { method: 'DELETE', 
        headers: 
          { 'Authorization': authorizationHeader() } 
      }
}

export const authorizationHeader = () => {
  if ( localStorage.getItem('user') !== null ) {
    const token = JSON.parse(localStorage.getItem('user')).token
    return `Bearer ${token}`
  } else { 
    return null
  } 
}

export const currentUser = () => {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')).user_id
  } else { return null }
}

export const setLocalStorage = json => {
  const userInfo = {
    token: json.jwt,
    user_id: json.user.data.id
  }
  localStorage.setItem('user', JSON.stringify(userInfo))
  store.dispatch({type: 'SET_USER', userInfo })
}


export const formatErrors = (errors) => {
  const errorList = errors.map((e, ind) => `${ind + 1}. ${e}` )
  return `Looks like you had some errors:\n\n ${errorList.join("\n")}`
}


export const filterMilesByMonthAndSport = (workouts, sport, filterMonth) => {
  if (workouts.length !== 0 ) {
    const mySportWorkouts = workouts.filter( w => {
      return w.attributes.workout_type === sport 
      && w.attributes.date.slice(5,7) === filterMonth
    })
    if (mySportWorkouts.length !== 0) {
      const reducer = (a, c) => a + c.attributes.miles
      return mySportWorkouts.reduce(reducer, 0 )
    }
  }
  return null 
}

export const progressPercentage = (goal) => {
  const myGoal = goal.attributes
  const monthMiles = filterMilesByMonthAndSport(store.getState().workouts, myGoal.sport, myGoal.month)
  return monthMiles ? `${(( monthMiles / myGoal.miles ) * 100).toFixed(0)}%` : '0%'
}

export const currentMonthMilesBySport = (goal) => {
  const myGoal = goal.attributes
  return filterMilesByMonthAndSport(store.getState().workouts, myGoal.sport, myGoal.month)
}


export const monthOptions = () => {
  return months.map((m, idx) => <option value={sanitizeMonthIndex(idx)}>{m}</option>)
}

const sanitizeMonthIndex = idx => {
  return idx >= 9 ? (idx + 1).toString() : `0${idx + 1}`
}

export const currentMonthWorkouts = (workouts) => {
  let currentMonth = new Date().getMonth()
  if (workouts.length !== 0 ) {
    return workouts.filter( w => w.attributes.date.slice(5,7) === sanitizeMonthIndex(currentMonth))
  }
  return null 
}


export const numericMonthToString = (numStr) => {
  if (numStr[0] === "0") {
    return months[parseInt(numStr[1]) - 1]
  } else {
    return months[parseInt(numStr) - 1]
  }
}