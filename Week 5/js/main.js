// This code should store "codewa.rs" as a variable called name but it's not working.
//  Can you figure out why?
var a = "code";
var b = "wa.rs";
var name = a + b;

// This function takes two numbers as parameters, the first number being
// the coefficient, and the second number being the exponent.
// Your function should multiply the two numbers, and then subtract 1 from the
// exponent. Then, it has to print out an expression (like 28x^7). "^1" should
// not be truncated when exponent = 2.

function derive(coefficient,exponent) {
  let a = coefficient * exponent
  let b = exponent - 1
  return a.toString() + "x^" + b.toString()
}

// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.

function testEven(n) {
    //Your awesome code here!
  if(n % 2 == 0){
    return true
  } else {
    return false
  }
}

// Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell),
//  check whether Pete and Billy can divide the melons so that each of them gets
//   an even amount.

function divide(weight){
  if(weight > 2 && weight % 2  === 0) {
    return true
  } else {
    return false
  }
}

// Make a simple function called greet that returns the most-famous "hello world!".

function greet(){
    return 'hello world!'
}
