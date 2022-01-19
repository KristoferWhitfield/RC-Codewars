// Given a non-empty array of integers, return the result of multiplying the
// values together in order.

function grow(x){
  return x.reduce((a, b) => a*b )
}

// Write a function named setAlarm which receives two parameters. The first
// parameter, employed, is true whenever you are employed and the second parameter,
// vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation
//  (because these are the circumstances under which you need to set an alarm).
//   It should return false otherwise.

function setAlarm(employed, vacation){

    if (employed == true && vacation == false){
      return true
    } else {
      return false
    }
}

// Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
  // your code here

  for(let i = 0; i < haystack.length; i++){

    if(haystack[i] === "needle"){
      return "found the needle at position " + i
    }
  }
}
