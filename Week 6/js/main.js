// Fix the variables assigments so that this code stores the string 'devLab'
// in the variable name.

var a = "dev"
var b = "Lab"

var name = a + b

// Complete the function which returns the weekday according to the input number:

function whatday(num) {

  // put your code here

  if(num === 1){
    return "Sunday"
  } else if ( num === 2){
    return "Monday"
  }else if ( num === 3){
    return "Tuesday"
  }else if ( num === 4){
    return "Wednesday"
  }else if ( num === 5){
    return "Thursday"
  }else if ( num === 6){
    return "Friday"
  }else if ( num === 7){
    return "Saturday"
  }else {
    return "Wrong, please enter a number between 1 and 7"
  }
}

// Define a method hello that returns "Hello, Name!" to a given name, or says
// Hello, World! if name is not given (or passed as an empty String).
//
// Assuming that name is a String and it checks for user typos to return a
// name with a first capital letter (Xxxx).

function hello(name) {
  if (typeof name === "undefined" || name.length === 0) {
    return `Hello, World!`;
  } else {
    return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
  }
}
