// Very simple, given a number, find its opposite.

function opposite(number) {
  //your code here
  return -number
}

// Clock shows h hours, m minutes and s seconds after midnight.
//
// Your task is to write a function which returns the time since midnight
// in milliseconds.

function past(h, m, s){
  //#Happy Coding! ^_^
  return h * 3600000 + m * 60000 + s * 1000
}

// Create a function that takes a number as an argument and
// returns a grade based on that number.
function grader(score) {
  if(score > 1 || score < .6){
    return "F"
  } else if(score >= .9){
    return "A"
  } else if(score >= .8){
    return "B"
  } else if(score >= .7){
    return "C"
  } else if(score >= .6){
    return "D"
  }
}

// We need a function that can transform a string into a number.
//  What ways of achieving this do you know?

var stringToNumber = function(str){
  // put your code here
  return parseFloat(str)
}
