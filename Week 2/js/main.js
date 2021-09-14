// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) .
// The input is the amount of USD as an integer, and the output should be a
// string that states the amount of Yuan followed by 'Chinese Yuan'

function usdcny(usd) {
  let yuan = usd * 6.75
  return yuan.toFixed(2).toString() + " Chinese Yuan"
}

// Jenny has written a function that returns a greeting for a user.
//  However, she's in love with Johnny, and would like to greet
//  him slightly different. She added a special case to her function,
//   but she made a mistake.
// Can you help her?
function greet(name){

  if(name === "Johnny"){
    return "Hello, my love!"
  }else {
     return "Hello, " + name + "!";
  }
}


// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
//
// Please use the following function names:
//
// addition = add
//
// multiply = multiply
//
// division = divide (both integer and float divisions are accepted)
//
// modulus = mod
//
// exponential = exponent
//
// subtraction = subt
//
// Note: All math operations will be: a (operation) b
//
// a (operation) b*

function add(a,b){
    return a+b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a*b
}

function mod(a,b){
    return a%b
}

function exponent(a,b){
    return a**b
}

function subt(a,b){
    return a-b
}

// Create a function that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if(number % 2 === 0){
    return "Even"
  }else {
    return "Odd"
  }
}

// Nathan loves cycling.
//
// Because Nathan knows it is important to stay hydrated, he drinks
// 0.5 litres of water per hour of cycling.
//
// You get given the time in hours and you need
//  to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
  return Math.floor(time * .5)
}
