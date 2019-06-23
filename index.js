function superbowlWin(record){
  let findings = record.find(record => record.result === "W")
  return !!findings ? findings.year : undefined 
}
