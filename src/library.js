export const formatDate = date => {
  const dSplit = new Date(date).toDateString().split(" ")
  return `${dSplit[1]} ${dSplit[2]}, ${dSplit[3]}`
}

export const capitalizeWord = word => {
  let wordArray = word.split("")
  wordArray[0] = wordArray[0].toUpperCase()
  return wordArray.join("")
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