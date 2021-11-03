// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
  //your code here
  return arr.filter((a,i) => i%2 == 0)
}
// 
// Given an array of integers as strings and numbers, return the sum of the array
//  values as if all were numbers.
//
// Return your answer as a number.

function sumMix(x){
 return x.map(a => +a).reduce((a, b) => a + b);
}
