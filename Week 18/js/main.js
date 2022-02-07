Find the mean (average) of a list of numbers in an array.

var findAverage = function (nums) {
  // Code here
  const apple = nums.reduce((a, b) => a + b)
  return apple / nums.length
}
