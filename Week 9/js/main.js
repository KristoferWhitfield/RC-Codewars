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

// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.

var summation = function (num) {
   var total = 0;
    for(var i = 1; i <= num; i++){
      total += i;
    }
    return total;
}

// Write a function to convert a name into initials. This kata strictly
// takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.
function abbrevName(name){
 var separate = name.split(" ");
    var abbrev = (separate[0].charAt(0) + "." + separate[1].charAt(0)).toUpperCase();
    return abbrev;
    // code away

}

// Return the Nth Even Number

function nthEven(n){
  // your code here
return (n - 1) * 2
}
