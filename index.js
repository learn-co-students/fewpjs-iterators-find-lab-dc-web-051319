const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

// THIS WORKS BUT WITHOUT FIND waaaah

// function superbowlWin(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].result === "W") {
//       return arr[i].year;
//     }
//   }
// } 


function superbowlWin(arr) {
  let result = arr.find( (obj) => {
    return obj.result === "W";
  })
  if (result) {
    return result.year;
  }
}
