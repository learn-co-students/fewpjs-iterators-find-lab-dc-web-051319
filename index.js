function superbowlWin(record)
{
  let x = record.find(record => record.result === "W")
  return x == undefined? undefined: x.year
}
