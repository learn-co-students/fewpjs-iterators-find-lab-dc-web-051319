
let superbowlWin = record => {
  let result = record.find( record => record.result === "W" )
  //using a ternary operator, ask if there is a result? If so, return the result.year
  // if not true return undefined
  return !!result ? result.year : undefined
}
