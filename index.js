const testVar = {}


function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let foundRecord = array.find(function(record) {
    return record.result == "W"
  })
  
  if (foundRecord) {
    return foundRecord.year
  }
}

// console.log(superbowlWin(record))
