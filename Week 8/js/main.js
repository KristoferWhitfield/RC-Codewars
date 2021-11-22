// Write a function to split a string and convert it into an array of words.

function stringToArray(string){

	// code code code
  return string.trim().split(" ")
}

//'m new to coding and now I want to get the sum of two arrays...actually the
//sum of all their elements. I'll appreciate for your help.

function arrayPlusArray(arr1, arr2) {
   return arr1.concat(arr2).reduce((a, b) => a + b);
}

//Complete the solution so that it reverses all of the words within the string
 passed in.

 function reverseWords(str){
    return str.split(' ').reverse().join(' ')
}

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g,'');
  }

//Given a string, you have to return a string in which each character (case-sensitive)
//is repeated once.

function doubleChar(str) {
  var dog = "";
  for( i = 0; i < str.length; i++) {
    dog += str[i] + str[i];
  }
  return newString;
}
