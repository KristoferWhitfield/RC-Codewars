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

// After a hard quarter in the office you decide to get some rest on a vacation.
// So you will book a flight for you and your girlfriend and try to leave all the
//  mess behind you.
//
// You will need a rental car in order for you to get around in your vacation.
// The manager of the car rental makes you some good offers.
//
// Every day you rent the car costs $40. If you rent the car for 7 or more days,
// you get $50 off your total. Alternatively, if you rent the car for 3 or more days,
// you get $20 off your total.
//
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  // Your solution here

  if(d >= 7){
    return d * 40 - 50
  } else if (d >=3){
    return d * 40 - 20
  } else {
    return d * 40
  }
}
