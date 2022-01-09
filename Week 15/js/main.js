// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the
//  average student in your class.
// You receive an array with your peers' test scores. Now calculate the average
//  and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating
// the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  // Your code here

  classPoints.push(yourPoints)
  let counter = 0
  for(let i = 0; i < classPoints.length; i++){
      counter += classPoints[i]
  }

  let newAvg = counter / classPoints.length

  if(yourPoints > newAvg){
    return true
  } else {
    return false
  }
}

// In this game, the hero moves from left to right. The player rolls the die and
// moves the number of spaces indicated by the die two times.
//
// Create a function for the terminal game that takes the current position of the
// hero and the roll (1-6) and return the new position.

function move (position, roll) {
  // return the new position
  return position + roll * 2
}
