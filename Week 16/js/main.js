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

// Given a set of numbers, return the additive inverse of each. Each positive
// becomes negatives, and the negatives become positives.

function invert(array) {


  return array.map(x => x * -1)

}

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
// The function takes a name as its only argument, and returns one of the following strings:

function areYouPlayingBanjo(name) {
  // Implement me

  if(name.charAt(0).toLowerCase() === "r"){
    return name + " plays banjo"
  } else {
    return name + " does not play banjo"
  }

}

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the
// bug in his unfinished for loop!f

function createArray(number){
  var newArray = [];

  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }

  return newArray;
}
