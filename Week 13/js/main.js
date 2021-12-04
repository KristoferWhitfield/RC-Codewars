// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// param is an array;  declare a function that returns the result of multiplication of numbers; ex [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 ;
// declare a function; declare a loop that iterates through the integers; use a method (reduce)

function multiply(){
  let arr=[2,3,4]
  let result= arr.reduce((a, b) => a * b)
  return result
}
multiply()

// ===========problem 2============================

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

// param is an array of whole integers in order; declaring a function that returns youngest , oldest , diff between youngest nad oldest.; ex [5month, 12ye, 22yr,33yr]=> [0,33,33]

function familyAges(arr){
let ages= arr.sort((a,b) => a -b )
console.log(ages)
 let lastAge = ages.pop(-1)  //
let firstAge = ages.shift()
console.log(lastAge,firstAge)
let finalArray = [firstAge, lastAge, (lastAge - firstAge)]

return finalArray

}



familyAges([22,3,11,29,45])
