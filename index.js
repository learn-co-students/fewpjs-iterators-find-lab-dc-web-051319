const testVar = {}

function testFunc() {
  return "hi"
}

function isWin(rec){
  return (rec.result == "W")
}

function superbowlWin(object){
  debugger
  let result = object.find(isWin);
    if (result) {
      return result.year;
    }else{
      return undefined;
    }
}

