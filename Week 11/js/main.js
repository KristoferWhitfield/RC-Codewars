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
