/*Given an array of numbers and an integer "sum", return if there exist two
 numbers in the array which add up to the given "sum"*/

//im inputing an array of whole numbers
//im inputting a sum of whole numbers
//numbers can be repeated
 function arrayTwoSums(arr, sum) {

// i set up 2 loops to loop through the array
// the two indexs of the array need to be compared
// if the sum of the two array = each other return true
// nest the loops

//loop 1 check the first element
for (var i = 0; i < arr.length; i++) {

//loop 2 checks the second element
  for (var j = i + 1; j < arr.length; j++) {

// determine if these two elements sum to S
    if (arr[i] + arr[j] === sum) {
      return true
      } else {
        return false
      }

     }

   }

}
//i want to return a boolean of true or false based on the sum of two numbers in the array
//to equal sum

arrayTwoSums([1, 7, 9, 10, 33, 5], 19, true);
