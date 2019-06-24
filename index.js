const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(recordHash)
{
  
  if (recordHash.find(e => e.result === "W") === undefined) 
  {
    return undefined 
  }
  
  let champsHash = recordHash.find(e => e.result === "W");

  return champsHash.year  
  
}
