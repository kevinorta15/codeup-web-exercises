"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// EXAMPLE 1

let favoriteColor = prompt("What is your favorite color?");
//
   function analyzeColor() {
       if (favoriteColor.toLowerCase() === 'blue') {
           alert('Blue is the color of the sky!');
       } else if (favoriteColor.toLowerCase() === 'red'){
           alert('Strawberries are red!');
       } else if (favoriteColor.toLowerCase() === 'cyan'){
           alert ("I don't know anything about cyan");
       } else {
           alert(favoriteColor + " is a cool color too!");
       }
   }


switch (favoriteColor) {
    case 'blue' :
        alert('Blue is the color of the sky!');
        break;
    case 'red'  :
        alert('Strawberries are red!');
        break;
    case 'cyan' :
        alert("I don't know anything about cyan");
        break;
    default:
        alert(favoriteColor + " is a cool color too!");
        break;
}
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
function showmemyColor() {
    if (colors) {
        return (randomColor + ' is such a great color!')
    }
}

        console.log(showmemyColor());
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
switch (colors) {
    default: (randomColor + ' is such a great color!');
    break;
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//SEE EXAMPLE 1 FOR ANSWER BUT INSERT ALERT

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var totalAmount = parseFloat(prompt("How much is your total today?"));
var luckyNumbers = parseFloat(prompt("What was your 'lucky number?"));

function calculateTotal(luckyNumbers,totalAmount) {

    if (luckyNumbers === 5) {
        return 0;
    } else if (luckyNumbers === 0) {
        return totalAmount
    } else if (luckyNumbers === 1){
        return (totalAmount- (totalAmount * .10));
    } else if (luckyNumbers === 2){
        return (totalAmount-(totalAmount * .20));
    } else if (luckyNumbers === 3){
        return (totalAmount- (totalAmount * .35));
    } else if (luckyNumbers === 4){
        return (totalAmount- (totalAmount * .50));
    }
}

alert( "Your total amount is: $" + calculateTotal(luckyNumbers, totalAmount));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var newTotal = parseInt(prompt("What is your bill total?"));

 alert("Your lucky number was: " + luckyNumber + ". " + "Your bill before the discount is: $" +
    newTotal + "." + "Your new price after the discount is: $" + calculateTotal(luckyNumber, newTotal));

// alert(calculateTotal(luckyNumbers, totalAmount));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var RedPillBluePill= confirm("Would you like to enter a number?")

function chooseaNumber(){
    if (RedPillBluePill === true) {
        var randomNumber = parseInt(prompt("Great! What number would you like to choose?"))

        if (randomNumber % 2 == 0){
             alert("Your number is even!")
        } else if (randomNumber % 2 !== 0)
            alert("Your number is odd!")

            alert(randomNumber + " + 100 is: " + (randomNumber + 100));
        if (randomNumber > 0 ){
            alert("Your number is positive!")
        } else if (randomNumber < 0){
            alert("Your number is negative!")
        } else {
            alert("0 is not a positive or a negative number")
        }

    } else (alert("Oh... well okay, suit yourself."));
}

chooseaNumber();

