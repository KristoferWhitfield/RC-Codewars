// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//
// Array can contain numbers or strings. X can be either.
//
// Return true if the array contains the value, false if not.

function check(a, x) {
  // your code here
  let array  = a
  if(array.indexOf(x) >= 0){
    return true
  }else {
    return false
  }
}

// The cockroach is one of the fastest insects.
// Write a function which takes its speed in km per hour and
//  returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
  //Good Luck!
  return Math.floor(s * 27.778)
}


// The starship Enterprise has run into some problem when
// creating a program to greet everyone as they come aboard.
// It is your job to fix the code and get the program working again!

function sayHello(name) {
  let add = "Hello, "
  return add + name
}

// Make a function that will return a greeting statement that uses an input; your
//  program should return, "Hello, <name> how are you doing today?".

function greet(name){

  return "Hello, " +name +" how are you doing today?"
}

// Create a function that takes 2 nonnegative integers in form of a string as an
// input, and outputs the sum (also as a string):

function sumStr(a,b) {
  return Number(a)+Number(b)+'';
}

// Inspired by the development team at Vooza, write the function that
//
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way.
// He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

function howManyLightsabersDoYouOwn(name) {
  if(name==="Zach"){
    return 18
  }else{
    return 0
  }
}
