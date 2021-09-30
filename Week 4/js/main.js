// Given a string, write a function that returns the string with a question mark
// ("?") appends to the end, unless the original string ends with a question mark,
// in which case, returns the original string.
function ensureQuestion(s) {
  // Code here
  let cat = ""
  if(s.includes("?")){
    return s
  }else{
  return cat.concat(s, "?")
   }
}

// You were camping with your friends far away from home, but when it's time to
// go back, you realize that your fuel is running out and the nearest pump is 50
// miles away! You know that on average, your car runs on about 25 miles per gallon.
// There are 2 gallons left. Considering these factors, write a function that tells
// you if it is possible to get to the pump or not. Function should return true
// (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values
// are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if((mpg*fuelLeft) >= distanceToPump){
    return true
  }else {
    return false
  }
};

// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps
// the animals do not have the right tails. To help her, you must correct the broken
// function to make sure that the second argument (tail), is the same as the last
// letter of the first argument (body) - otherwise the tail wouldn't fit!

function correctTail(body, tail){

  sub = body.substr(body.length-(tail.length))

  if (sub === tail){
    return true
  }
  else {
    return false
    }
}
