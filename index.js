const testVar = {}

function testFunc() {
  return "hi"
}

let superbowlWin = function(array) {
  const obj = array.find(ele => ele.result === 'W');

  if (typeof obj === 'undefined') {
    return undefined 
  } else {
    return obj.year
  }

}