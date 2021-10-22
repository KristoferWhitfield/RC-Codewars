// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
      args.sort((a, b) => a - b)
     return args[0]
  }
}

// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
  return x.split(" ").reduce((a, c) => a + c)
}

// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0
    for(let i = 0; i < arrayOfSheep.length; i++) {
        if(arrayOfSheep[i]) count += 1
    }
    return count
}

// It's the academic year's end, fateful moment of your school report. The averages 
// must be calculated. All the students come to you and entreat you to calculate
// their average for them. Easy ! You just need to write a script.
//
// Return the average of the given array rounded down to its nearest integer.

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  return Math.floor(marks.reduce((x, y) => x + y) / marks.length)
}
