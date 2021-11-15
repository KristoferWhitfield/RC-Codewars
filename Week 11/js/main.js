// Write a function which returns a new string containing the same character
// sequences except the first and the last ones but this time separated by spaces.
//
// If the input string is empty or the removal of the first and last items would
// cause the resulting string to be empty, return an empty value (represented as a
//  generic value NULL in the examples below).

function array(arr){
//Good luck

//   we first we need to remove first and last character from string
//   replace commas with spaces
//   it needs to returned as a string
//   enter in conditional

  let newArr = arr.split(',').slice(1, -1).join(' ') || null

return newArr
}
//arr is an array stings seperated by commas we have 1 element the char are
//seperated by comoas

//retrun an array where the first and last sequence is removed we retrun a string
//and the sequence has spaces instead of commas
//if the input is empty or ill result in being empty after removal return null


//Write a function that combines two arrays by alternatingly taking elements from each array in turn.

function mergeArrays(a, b) {
  // your code here

   const maxLength = Math.max(a.length, b.length);
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(a[i]);
    result.push(b[i]);
  }

  return result.filter((value) => value !== undefined);
}

// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter,
//  that takes an array of strings as an argument and returns a filtered array
//  containing the same elements but with the 'geese' removed.

 //birds  an array with strings of words in it
//need a new array to be returned with the geese strings removed from it
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//can use filter to give me a new array with out the geese string in it
//need a way to say i dont want geese inside my new array
  return birds.filter(x => !geese.includes(x))
  // return an array containing all of the strings in the input array except those that match strings in geese
};

// Simple challenge - eliminate all bugs from the supplied code so that the code
// runs and outputs the expected value. Output should be the length of the longest
// word, as a number.

function findLongest(str) { 

  var spl = str.split(" ");
  var longest = 0

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }

    }
   return longest
}
