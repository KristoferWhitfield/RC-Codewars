// Create a function that takes a string and an integer (n).
//
// The function should return a string that repeats the input string n number of times.
//
// If anything other than a string is passed in you should return "Not a string"

var repeatIt = function(str, n) {

    if(typeof str != 'string'){
      return "Not a string"
      } else {
        return str.repeat(n)
        }
  }
  // 
  // Create a function named combineNames that accepts two parameters (first and last name).
  //  The function should return the full name.

   function combineNames(first, last){

  return first + " " + last
}
