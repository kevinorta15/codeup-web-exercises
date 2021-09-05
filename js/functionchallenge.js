// Make a function called returnTwo() that returns the number 2 when called
// function returnTwo(){
//     return 2
// }
// Test this function with console.log(returnTwo())
//     Make a function called sayHowdy() which console.logs the string “Howdy!”

// function sayHowdy(){
//     console.log("Howdy!");
// }
//     Test this function by directly calling sayHowdy()
// Remember this function does not need a defined return value
// Make a function called returnName() that returns the string of your name
// function returnName(){
//     return ("Kevin")
// }
// Test this function with console.log(returnName())
//     Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with console.log(addThree(5))
// function addThree(x){
//     return x + 3
// }
//     Make a function called sayString() which returns the string input passed in.
// Test this function with console.log(sayString('codeup'))
// function sayString(input){
//     console.log("This is your word: " + input);
// }
//
// console.log(sayString("codeup"));

//     Challenge Function Drills
// Write a function called identity(input) that takes in an argument called input and returns that input.


//     Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
// Write a function called first(input) that returns the first character in the provided string.
//     Write a function called last(input) that returns the last character of a string
// Write a function called rest(input) that returns everything but the first character of a string.
//     Write a function called reverse(input) that takes a string and returns it reversed.
//     Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
//     Write a function called count(input) that takes in a string and returns the number of characters.
//     Write a function called add(a, b) that returns the sum of a and b
// Write a function called subtract(a, b) that return the difference between the two inputs.
//     Write multiply(a, b) function that returns the product
// Write a divide(numerator, denominator) function that returns a divided by b
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.



// /**
//  * TODO:
//  * Add up the Numbers from a Single Number
//  * Create a function named addUp that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
//  *
//  * Examples
//  *
//  * >> addUp(4) ➞ 10
//  * >> addUp(13) ➞ 91
//  * >> addUp(600) ➞ 180300
//  *
//  * Notes
//  * Expect any positive number between 1 and 1000.
//  */
// /**

// A Possible Formula: value * (value + 1) / 2
// function addUp(value){
//     if (value == 1){
//         return 1
//     } else {
//         return value + addUp(value - 1);
//     }
// }

/*function addUp(4){
   if(4 ==1){
        return 1
    } else {
        return 4 + (addUp(4-1 = 3) {
 not gointo happen ->  if(3 == 1) {
                            return 1
                        } else {
                            return 3 + (addUp(3-1 = 2) {
      not gointo happen ->     if(2 == 1) {
                                    return 1
                                 } else {
                                    return 2 + (addUp(2-1 = 1) {
                                        if(1 == 1) {
                                            return 1
         not gointo happen ->    } else {
                                            return 2 + addUp()
                                      })

console.log(addUp(1));


//  * TODO:
//  * Count Instances of a Character in a String
//  * Create a function named charCount that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
//  *
//  * Examples
//  * >> charCount("a", "edabit") ➞ 1
//  * >> charCount("c", "Chamber of secrets") ➞ 1
//  * >> charCount("b", "big fat bubble") ➞ 4
//  *
//  * Notes
//  * Your output must be case-sensitive (see second example).
//  */
//
// /**

function charCount(userString, letter){
    var str = userString.toLowerCase();
    var lttr = letter.toLowerCase();

    return str.split(lttr).length-1;
}

console.log(charCount( "The Creative Class of CodeUp Animals", "A"));

//  * TODO:
//  * Return the Index of the First Vowel
//  * Create a function named firstVowel that returns the index of the first vowel in a string.
//  *
//  * Examples
//  * >> firstVowel("apple") ➞ 0
//  * >> firstVowel("hello") ➞ 1
//  * >> firstVowel("STRAWBERRY") ➞ 3
//  * >> firstVowel("pInEaPPLe") ➞ 1
//  *
//  * Notes
//  * Input will be single words.
//  * Characters in words will be upper or lower case.
//  * "y" is not considered a vowel.
//  * Input always contains a vowel.
//  */
function firstVowel(str){
    var stringCase = str.toLowerCase()
for (var i = 0; i < stringCase.length; i++ ){
    return stringCase[1].charAt(1)
}
}
// /**
//  * TODO:
//  * Integer Digits Count
//  * Create a function named count that counts the integer's number of digits.
//  *
//  * Examples
//  *
//  * >> count(318) ➞ 3
//  * >> count(-92563) ➞ 5
//  * >> count(4666) ➞ 4
//  * >> count(-314890) ➞ 6
//  * >> count(654321) ➞ 6
//  * count(638476) ➞ 6
//  *
//  * Notes
//  * For an added challenge, try to solve this without using strings.
//  */
// ​
// ​
// /**
//  * TODO:
//  * Remove the Letters ABC
//  * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
//  *
//  * Examples
//  * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
//  * >> removeABC("hello world!") ➞ null
//  * >> removeABC("") ➞ null
//  *
//  * Notes
//  * If the given string does not contain "a", "b", or "c", return null.
//  */
// ​
// ​
// /**
//  * TODO:
//  * Write a function named reverseOdd that will take a string as argument, reverse all the words which have odd length. The even length words are not changed.
//  *
//  * Examples
//  *
//  * >> reverseOdd("Bananas") ➞ "sananaB"
//  * >> reverseOdd("One two three four") ➞ "enO owt eerht four"
//  * >> reverseOdd("Make sure uoy only esrever sdrow of ddo length") ➞ "Make sure you only reverse words of odd length"
//  *
//  * Notes
//  * There is exactly one space between each word and no punctuation is used.
//  * Should work with empty string.
//  * Should work with only one word.
//  */
// ​
// ​
// /**
//  * TODO:
//  * Convert a Number to Base-2
//  * Create a function named binary that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
//  *
//  * Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).
//  *
//  * Examples
//  * >> binary(1) ➞ "1"   // 1*1 = 1
//  * >> binary(5) ➞ "101"   // 1*1 + 1*4 = 5
//  * >> binary(10) ➞ "1010"   // 1*2 + 1*8 = 10
//  *
//  * Notes
//  * Numbers will always be below 1024 (not including 1024).
//  * The && operator could be useful.
//  * The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
//  * If a binary conversion for 0 is attempted, return "0".
//  */

// var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
//
// function cleanPhoneNumbers(phoneNumberString){
//     var cleanedPhoneNumbers = [];
//
//     //Split string into individual phone numbers
//     var phoneNumberArr = phoneNumberString.split('\n')
// }
// console.log(phoneNumbers);

// function rollSixSided(){
// return math.floor(math.random() * 6) +1
// }
//
// for (let i = 0; i < 5; i++) {
//     console.log("You rolled a " + rollSixSided())
// }
//
// function rollDie() {
//     return Math.floor(Math.random() * 6);
// }
// function rollSixSided(input) {
//
//     for (var i = 0; i < input; i++) {
//
//         var random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
//
//         console.log("You have rolled: " + random)
//     }
// }
//
// console.log(rollSixSided(10));





