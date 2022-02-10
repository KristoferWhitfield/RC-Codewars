// Find the mean (average) of a list of numbers in an array.

var findAverage = function (nums) {
  // Code here
  const apple = nums.reduce((a, b) => a + b)
  return apple / nums.length
}

// Create a method that accepts a list and an item, and returns true if the
//  item belongs to the list, otherwise false.

 function include(arr, item){
  // ...
  return arr.includes(item)
}
