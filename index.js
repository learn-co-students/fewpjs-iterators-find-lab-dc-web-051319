const testVar = {}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  win_record = array.find(record => {
    return record["result"] === "W"
  })
  if (win_record) {
    return win_record["year"]
  } else {
    return undefined
  }
}

superbowlWin(record)
