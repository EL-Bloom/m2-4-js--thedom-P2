// Exercise 2
//
// Part 1 - Write
// ---------------
// Write a function accepts an array of values and returns a new array of values with all of the strings replaced with the word "redacted" (each value is replaced by the word 'redacted').
// Do not redact values that are not strings.
//
// e.g. redacted(["bacon", false, 42]) returns [ 'redacted', false, 42 ]
// 

//1. return a new array 
//2. find strings within the array 
//3. replace those strings with the word "redacted" 
//4. if   NOT a string, leave as is

//1. return a new array 
//2. find strings within the array 
//3. replace those strings with the word "redacted" 
//4. if   NOT a string, leave as is



const redacted = (arr) => {
<<<<<<< HEAD
 
  return arr.map(function (val) {
    if (typeof val === "string") {
      return "redacted";
    } else {
      return val;
    }
  });
}



console.log(redacted(["bacon", false, 42]));
=======
   let new = arr.map ( function (redact)) { 
    if (typeOf arr === "string") { 
      return "redacted";

   }
    }
  return new;
    }
>>>>>>> 37f25910f7090cb37b094d9ec9bb7c77c4746e54

console.log(["bacon", false, 42]);
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = redacted;
