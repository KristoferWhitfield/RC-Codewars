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
