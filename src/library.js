import { store } from './index'


export const formatDate = date => {
// Edit bug where UTC time affects day
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
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
  }
}

export const currentUser = () => {
  return JSON.parse(localStorage.getItem('user')).user_id
}

export const setLocalStorage = json => {
  const userInfo = {
    token: json.jwt,
    user_id: json.user.data.id
  }
  localStorage.setItem('user', JSON.stringify(userInfo))
  store.dispatch({type: 'SET_USER', userInfo })
}
