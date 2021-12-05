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


// ======problem 3=======

// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).

// Example:

// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

//the array will be in the params
// delcare a function that is adding up the the numbers in the [ ] execpet  10 ,  1
// ex. [ 1, 6, 2,  8, 10 ] => 2+6+8=> 16
// first declare a function that adds the num and returns the sum , within the
// function have to declare a var and assign to the arr.sort() that will output

// declare a function that returns the sum of the array;decare a variable(numbers1) and assign it to arr.sort to sort in ascending order.;declare a variable assign it to numbers1.slice(1,-1)=> that will remove the lowest and highest numbers. declare the finalOutput var and use a reduce method to sum the numbers in the array.
function addNumbers(arr){
var numbers1 = arr.sort((a,b) => a -b )
let numbers2 = numbers1.slice(1, -1)

let finalNumbers = numbers2.reduce((a,b) => a + b)
console.log(finalNumbers)
}
addNumbers([22,3,4,14,32])
