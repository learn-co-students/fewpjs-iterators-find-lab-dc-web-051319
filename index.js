const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let result = array.find(array => array.result === 'W');
  if (!!result) {
    return result.year
  };
};