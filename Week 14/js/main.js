// Write a function that takes an array of words and smashes them together into a
// sentence and returns the sentence. You can ignore any need to sanitize words or
// add punctuation, but you should add spaces between each word. Be careful, there
//  shouldn't be a space at the beginning or the end of the sentence!

 function smash (words) {
   return words.join(" ")
}

// Create a function called shortcut to remove all the lowercase vowels in a given string.

function shortcut(string){
  return string.replace(/[aeiou]/g, "")
}

// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.

function otherAngle(a, b) {
  return 180-(a+b)
}

// Bob needs a fast way to calculate the volume of a cuboid with three values: 
// length, width and the height of the cuboid. Write a function to help Bob with
// this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length* width*height
  }
}
