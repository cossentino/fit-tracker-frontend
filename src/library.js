export const formatDate = date => {
  const dSplit = new Date(date).toDateString().split(" ")
  return `${dSplit[1]} ${dSplit[2]}, ${dSplit[3]}`
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
