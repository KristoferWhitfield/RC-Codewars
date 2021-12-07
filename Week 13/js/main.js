// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// param is an array;  declare a function that returns the result of multiplication of numbers; ex [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 ;
// declare a function; declare a loop that iterates through the integers; use a method (reduce)

function multiply(){
  let arr=[2,3,4]
  let result= arr.reduce((a, b) => a * b)
  return result
}
multiply()

// ===========problem 2============================

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

// param is an array of whole integers in order; declaring a function that returns youngest , oldest , diff between youngest nad oldest.; ex [5month, 12ye, 22yr,33yr]=> [0,33,33]

function familyAges(arr){
let ages= arr.sort((a,b) => a -b )
console.log(ages)
 let lastAge = ages.pop(-1)  //
let firstAge = ages.shift()
console.log(lastAge,firstAge)
let finalArray = [firstAge, lastAge, (lastAge - firstAge)]

return finalArray

}



familyAges([22,3,11,29,45])


// ======problem 3=======

// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).

// Example:

// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

//the array will be in the params
// delcare a function that is adding up the the numbers in the [ ] execpet  10 ,  1
// ex. [ 1, 6, 2,  8, 10 ] => 2+6+8=> 16
// first declare a function that adds the num and returns the sum , within the
// function have to declare a var and assign to the arr.sort() that will output

// declare a function that returns the sum of the array;decare a variable(numbers1) and assign it to arr.sort to sort in ascending order.;declare a variable assign it to numbers1.slice(1,-1)=> that will remove the lowest and highest numbers. declare the finalOutput var and use a reduce method to sum the numbers in the array.
function addNumbers(arr){
var numbers1 = arr.sort((a,b) => a -b )
let numbers2 = numbers1.slice(1, -1)

let finalNumbers = numbers2.reduce((a,b) => a + b)
console.log(finalNumbers)
}
addNumbers([22,3,4,14,32])


// =========set 2 problem 1========>>
// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// were passing in a string
// retrun the string with the first and last letters removed if the string is less than 2 letters, retrun the string

function middleString(string){

//we can use the slice method (1, string length -1)
//we can set up a conditional that if the string lenght
// is < 2, return the string

if(string.length <= 2){
  return string
} else {

  return string.slice(1, string.length -1 )
}



}



middleString("puppy")




// Create a function that alternates the case of a given string.
// Ex. HeLLo WoRLd => hEllO wOrlD

//passing in a string
// returning every other character as Upper case
// ex. (teST => TEst)
// things to consider using:
//char at , toUpperCase or toLowerCase, a for loop
// create a for loop that gets the previous character and if the previous character is an upper case, then converte it to a lower case
// else if the previous character is a lowercase then we convert it to an upper case

//return the result

function alternativeLetters(string) {
  let results = ''
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i).toLowerCase()) {
      results += string.charAt(i).toUpperCase()
    }
    else if (string.charAt(i) === string.charAt(i).toUpperCase()) {
      results += string.charAt(i).toLowerCase()
    }

  }

  //puts all the answers to the results empty string

  return results
  console.log(results, 'results2')

}
console.log(alternativeLetters('HapPY'), 'tester')



// ========problem 3========

// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// Ex. Input: "aa", "bb" , "cc" => Output: "abcabc"
// Ex. Input: "qwe", "kcx" , "hwq" => Output: "qkhwcwexq"

// Note: You can expect all of the inputs to be the same length.


// there will be 3 strings with groups of letters
// the first letter of each group will be added and be put at the beginning of the new string

function threeStrings(stringOne, stringTwo, stringThree){

let newString = []
let s1 = stringOne.split('')
let s2 = stringTwo.split('')
let s3 = stringThree.split('')

console.log(s1,'=s1', s2, '=s2', s3, '=s3')

for(let i = 0; i < s1.length; i++){
newString += s1[i] + s2[i] + s3[i]
}
console.log(newString, "= new string")


}

// newString += s1.charAt(i) + s2.charAt(i) + s3.charAt(i)

threeStrings("hah","ele","yly")


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// =======PREP===========>>>>

// param is an array of int numbers and int(the target); declare function that returns
//  an array that gives the index of the sum.
// declare a function: with in the function create two loops that iterates; declare a conditional to check if the two numbers equal the target to retrun the indices of the 2 numbers in any order
// we also need conditional if one number equals the target to skip it

function twoSums(nums, target){
// we set up 2 loops, one of them is nested we want the nested loop to start on the 2nd index
//we will be comparing the index from each loop to equal the target


for(let i = 0; i < nums.length; i++){


 for(let j = i + 1; j < nums.length; j++){

   if(nums[j]+nums[i] === target){
     //return the index of both numbers
     return [i, j]
   }
 }
}

}

twoSums([2, 5, 7, 9], 7)
