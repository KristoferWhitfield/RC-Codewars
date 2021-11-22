The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
// return the two oldest/oldest ages within the array of ages passed in.
//ages will be an array with numbers inside of it, the order of the numbers are random,
//the array will have at least 2 indexs in it
function twoOldestAges(ages){
//i know i need to take the array and loop through the array and find the highest number
//ill then need to take that number and put it in a new array
//i know i can use filter to loop through the array and will put the element into another array
//**i need to determine how filter can detect whats the highest number
//**i need to determine once the elements are in the new array, to sort by lowest number
//the sort method b-a sorts the lowest number first


 let max = ages.reduce((a, c) =>
     Math.max(a, c))
 //gives the array with the max
 let maxArray = ages.filter(x => x === max)
 //gives new array with numbers max removed
 let newArray = ages.filter(x => x != max)
 //gives me new max
 let secondMax = newArray.reduce((a, c) =>
     Math.max(a, c))

 if (maxArray.length > 1 ){
   return maxArray.slice(0,2)
 } else {
  maxArray.unshift(secondMax)
   return maxArray
 }


  console.log (secondMax)
  console.log (ages)
}

//im retruning an array with the second oldest age first and then the oldest age second
//the returned array should have at least 2 items in it


// Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0
// there will be an array of numbers
function find_average(array) {
  // your code here

  // an average is all the numbers divided by the amount of numbers divided
  // reduce method?
  // the average i can use the array length for all numbers divided
  return array.reduce((acc,current) => acc += current) / array.length

}

// i will be giving back an average(a number) if the array is empty, return a zero


// You are given two sorted arrays that both only contain integers.
// Your task is to find a way to merge them into a single one, sorted in asc order.
// Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original
// sorted arrays.


// theres 2 arrays with numbers in it
function mergeArrays(arr1, arr2) {
// i need to bring both arrays together in one arrays
// concat? sort?
  let arr3 = arr1.concat(arr2).sort((a, b) => a - b)
  return arr3.filter((value, index) => arr3.indexOf(value) === index)
}

// return an array with both arrays in accending order

// Given an array of integers, return a new array with each value doubled.

function maps(x){


  return x.map(n => n*2)

}


// This method, which is supposed to return the result of dividing its first
// argument by its second, isn't always returning correct values. Fix it.

const solve = (x, y) => x / y
