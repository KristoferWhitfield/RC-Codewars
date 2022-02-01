// You take your son to the forest to see the monkeys. You know that there are a
// certain number there (n), but your son is too young to just appreciate the full
//  number, he has to start counting them from 1.
//
// As a good parent, you will sit and count with him. Given the number (n),
// populate an array with all numbers up to and including that number, but
// excluding zero.

function monkeyCount(n) {
// your code here
  let array = []

  for(let i = 1; i <= n; i++){
    array.push(i)
  }
  return array
}

// hile making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
//
// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
//
// The function receives one parameter health which will always be a whole number between -10 and 10.

function checkAlive (health) {
  if (health <= 0) {

    return false
  } else{
    return true
  }
}

Create a combat function that takes the player's current health and the amount
of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  // Write your code here

  if(health - damage <= 0){
    return 0
  }else {
    return health - damage
  }
}

This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {

  let array = []

  for(let i = 1; i <= n; i++){
    array.push(i)
  }
  return array
}
